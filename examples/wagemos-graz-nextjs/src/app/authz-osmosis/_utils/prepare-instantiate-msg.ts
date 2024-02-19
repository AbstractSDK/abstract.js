export interface Root {
  result: Result
}

export interface Result {
  data: Data
}

export interface Data {
  json: Json
  meta: Meta
}

export interface Json {
  id: string
  type: string
  raw: Raw
  spreadFactor: string
  reserveCoins: string[]
  totalFiatValueLocked: string
  coinDenoms: string[]
}

export interface Raw {
  address: string
  incentives_address: string
  spread_rewards_address: string
  id: string
  current_tick_liquidity: string
  token0: string
  token1: string
  current_sqrt_price: string
  current_tick: string
  tick_spacing: string
  exponent_at_price_one: string
  spread_factor: string
  last_liquidity_update: string
}

export interface Meta {
  values: Values
}

export interface Values {
  spreadFactor: string[][]
  'reserveCoins.0': string[][]
  'reserveCoins.1': string[][]
  totalFiatValueLocked: string[][]
}

const GET_POOL_DATA_LINK =
  '/osmosis/pools-edge-trpc/pools.getPool?input=%7B%22json%22%3A%7B%22poolId%22%3A%221220%22%7D%7D'

export async function prepareInstantiateMsg() {
  const poolData = (await fetch(GET_POOL_DATA_LINK).then((res) =>
    res.json(),
  )) as Root
  const tick = BigInt(poolData.result.data.json.raw.current_tick)
  const tickSpacing = BigInt(poolData.result.data.json.raw.tick_spacing)
  const sqrtPrice = poolData.result.data.json.raw.current_sqrt_price
  // transforming dot-notated sqrtPrice to get the most precise pool ratio
  const amount0FromPrice = BigInt(sqrtPrice.replace('.', '')) ** 2n
  // getting `ratio1` as if we would have swapped all `amount0FromPrice` to `ratio1`
  // to do that, we transform `amount0FromPrice` to string and replace all [1, ...] symbols to zero.
  // it is safe to do so as we just need the ratio, and the `amount1FromPrice = amount0FromPrice / sqrtPrice^2`
  const amount1FromPrice = BigInt(
    `1${Array.from({
      length: amount0FromPrice.toString().length - 1,
    })
      .fill('0')
      .join('')}`,
  )

  const lowerTick = tick - (tick % tickSpacing)
  const higherTick = tick + (tickSpacing - (tick % tickSpacing))

  console.log({ amount0FromPrice, amount1FromPrice, lowerTick, higherTick })
}
