'use client'

import { stringToAccountId } from '@abstract-money/core'
import { coin } from '@cosmjs/stargate'
import { useChain } from '@cosmos-kit/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogDescription } from '@radix-ui/react-dialog'
import { Loader2 } from 'lucide-react'
import { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { betting } from '../../_generated'
import { RoundResponse } from '../../_generated/cosmwasm-codegen/Betting.types'
import { Button } from '../../components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form'
import { Input } from '../../components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
import { useToast } from '../../components/ui/use-toast'

const placeBetSchema = z.object({
  amount: z.coerce
    .number({ required_error: 'Amount to bet is required' })
    .positive('Amout to bet must be positive'),
  accountSeq: z.string({ required_error: 'Account Sequence is required' }),
})

export function PlaceBetDialog({ round }: { round: RoundResponse }) {
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm({
    mode: 'onTouched',
    resolver: zodResolver(placeBetSchema),
    defaultValues: {
      amount: 1,
      accountSeq: round.teams[0]?.seq.toString(),
    },
  })

  const { toast } = useToast()

  const { isWalletConnected } = useChain('neutron')

  const { mutateAsync: placeBetAsync, isLoading } =
    betting.mutations.usePlaceBet({
      accountId: stringToAccountId('neutron-18'),
      chainName: 'neutron',
    })

  const onSubmit: SubmitHandler<z.infer<typeof placeBetSchema>> = useCallback(
    async ({ amount, accountSeq }) => {
      const accountIdToBetOn = round.teams.find(
        (account) => account.seq === +accountSeq,
      )
      if (!accountIdToBetOn) throw new Error('Account not found')

      await placeBetAsync?.({
        msg: {
          roundId: round.id,
          bet: {
            account_id: accountIdToBetOn,
            asset: { name: round.total_bet.name, amount: amount.toString() },
          },
        },
        args: { funds: [coin(amount.toString(), 'untrn')] },
      })

      setIsOpen(false)
      toast({
        title: 'Bet placed',
        description: `You bet ${amount} ${round.total_bet.name} on account ${accountIdToBetOn.seq}`,
      })
    },
    [placeBetAsync],
  )

  return (
    <>
      <Button disabled={!isWalletConnected} onClick={() => setIsOpen(true)}>
        Place Bet
      </Button>
      <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <DialogContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>Place a bet on {round.name}</DialogTitle>
                <DialogDescription>{round.description}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-2 py-4">
                <FormField
                  control={form.control}
                  name="accountSeq"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Sequence</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an account sequence to bet on" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {round.teams.map((team) => (
                            <SelectItem
                              key={team.seq}
                              value={team.seq.toString()}
                            >
                              {team.seq}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select an account sequence to bet on.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bet Amount</FormLabel>
                      <FormControl>
                        <Input placeholder="1337" type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the amount you want to bet.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button disabled={isLoading} type="submit">
                  {isLoading && (
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  )}
                  Place Bet
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}
