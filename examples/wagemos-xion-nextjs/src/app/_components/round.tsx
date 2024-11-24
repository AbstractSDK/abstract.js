import { ComponentProps } from 'react'
import { Badge } from '../../components/ui/badge'
import { cn } from '../../utils'

export function Round({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <section
      className={cn('border bg-card p-2 rounded-md', className)}
      {...rest}
    />
  )
}

export function RoundHeader({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('py-2 border-b flex items-center', className)}
      {...rest}
    />
  )
}

export function RoundBody({ className, ...rest }: ComponentProps<'div'>) {
  return <div className={cn('py-2 border-b', className)} {...rest} />
}

export function RoundFooter({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('py-2 flex justify-between items-center', className)}
      {...rest}
    />
  )
}

export function RoundName({ className, ...rest }: ComponentProps<'span'>) {
  return <span className={cn('text-xl mr-auto', className)} {...rest} />
}

export function RoundDescription({
  className,
  ...rest
}: ComponentProps<'div'>) {
  return <div className={cn('italic', className)} {...rest} />
}

export function RoundId({
  className,
  ...rest
}: Omit<ComponentProps<typeof Badge>, 'variant'>) {
  return <Badge className={cn('mr-2', className)} {...rest} />
}

export function RoundStatus({
  className,
  open,
  ...rest
}: Omit<ComponentProps<typeof Badge>, 'variant'> & { open: boolean }) {
  return (
    <Badge
      className={cn('', className)}
      variant={open ? 'default' : 'secondary'}
      {...rest}
    />
  )
}

export function RoundWinningTeam({
  className,
  ...rest
}: Omit<ComponentProps<typeof Badge>, 'variant'>) {
  return <Badge className={cn('ml-2', className)} variant="outline" {...rest} />
}

export function RoundTeams({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div className={cn('mt-2 flex flex-wrap gap-1', className)} {...rest} />
  )
}

export function RoundTeamMember({
  className,
  ...rest
}: Omit<ComponentProps<typeof Badge>, 'variant'>) {
  return <Badge className={cn('', className)} variant="outline" {...rest} />
}

export function RoundTotalBet({
  className,
  ...rest
}: Omit<ComponentProps<typeof Badge>, 'variant'>) {
  return <Badge className={cn('', className)} {...rest} />
}
