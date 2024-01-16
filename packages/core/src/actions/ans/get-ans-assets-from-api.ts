import { request } from 'graphql-request'
import { Asset } from 'src/utils/assets'
import { chainIdToName } from 'src/utils/chain-registry'
import { gql } from '../../codegen/gql'

export async function getAnsAssetsFromApi(
  apiUrl: string,
  chainId: string,
  // @TODO Ans Asset type
  assets: Asset[],
) {
  const chainName = chainIdToName(chainId)
  const ids = assets.map((asset) => asset.name.ansName)
  const {
    ans: { assets: resolvedAssets },
  } = await request(
    apiUrl,
    gql(/* GraphQL */ `
    query AssetsQuery($chain: ID!, $filter: IdsFilter!) {
      ans(chain: $chain) {
        assets(filter: $filter) {
          id
          type
          address
        }
      }
    }
  `),
    {
      chain: chainName,
      filter: {
        ids,
      },
    },
  )

  const assets = resolvedAssets.map(({ type, address, id }) => {
    const asset = this.assets.find(
      // sanity
      (asset) => asset.name.ansName.toLowerCase() === id.toLowerCase(),
    )
    if (!asset) {
      throw new Error(`Could not find asset ${id}`)
    }

    const amount = asset.amount

    return match(type)
      .with(AssetType.Cw20, () => Asset.cw20(address, amount))
      .with(AssetType.Native, () => Asset.native(address, amount))
      .with(
        AssetType.Cw1155,
        () =>
          // cw1155 is not supported by default, and is a highly uncommon asset type
          new Asset(
            {
              cw1155: address,
            },
            amount,
          ),
      )
      .exhaustive()
  })

  const deploymentData = await request(
    apiUrl,
    gql(/* GraphQL */ `
      query AnsHostDeployment($chain: ID!) {
        version
        deployment(chain: $chain) {
          ansHost
        }
        chainInfo(chain: $chain) {
          rpcUrl
        }
      }
    `),
    {
      chain: chainId,
    },
  )

  return deploymentData.deployment.ansHost
}
