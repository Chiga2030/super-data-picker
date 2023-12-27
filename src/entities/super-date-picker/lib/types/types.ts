export type ValueLiteral = 'today' | 'yesterday' | 'week' | 'month' | 'year'

export interface CommonlyUsed {
  label: string
  value: ValueLiteral
}
