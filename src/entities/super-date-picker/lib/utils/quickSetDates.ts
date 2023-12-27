import dayjs from 'dayjs'
import { ValueLiteral, } from '../types/types'


export const quickSetDates = (
  value: ValueLiteral,
  setStartDate: React.Dispatch<React.SetStateAction<string | null>> | null,
  setEndDate: React.Dispatch<React.SetStateAction<string | null>> | null
) => {
  if (setStartDate && setEndDate) {
    if (value === 'today') {
      const now = dayjs()
      const todayStart = now.format('YYYY-MM-DDT00:00:00')
      const todayEnd = now.format('YYYY-MM-DDT23:59:59')

      setStartDate(String(new Date(todayStart)))
      setEndDate(String(new Date(todayEnd)))
    }


    if (value === 'yesterday') {
      const yesterday = dayjs(Date.now() - (60 * 60 * 24 * 1000))
      const yesterdayStart = yesterday.format('YYYY-MM-DDT00:00:00')
      const yesterdayEnd = yesterday.format('YYYY-MM-DDT23:59:59')

      setStartDate(String(new Date(yesterdayStart)))
      setEndDate(String(new Date(yesterdayEnd)))
    }


    if (value === 'week') {
      const dayOfWeek = dayjs().day()
      const daysToWeekEnd = 7 - dayOfWeek

      const weekStart = dayjs().subtract(dayOfWeek - 1, 'day').format('YYYY-MM-DDT00:00:00')
      const weekEnd = dayjs().add(daysToWeekEnd, 'day').format('YYYY-MM-DDT23:59:59')

      setStartDate(String(new Date(weekStart)))
      setEndDate(String(new Date(weekEnd)))
    }


    if (value === 'month') {
      const dayOfMonth = dayjs().date()
      const daysInMonth = dayjs().daysInMonth()
      const daysToMonthEnd = daysInMonth - dayOfMonth

      const monthStart = dayjs().subtract(dayOfMonth - 1, 'day').format('YYYY-MM-DDT00:00:00')
      const monthEnd = dayjs().add(daysToMonthEnd, 'day').format('YYYY-MM-DDT23:59:59')

      setStartDate(String(new Date(monthStart)))
      setEndDate(String(new Date(monthEnd)))
    }

    if (value === 'year') {
      const currentYear = dayjs().year()

      const yearStart = `${currentYear}-01-01T00:00:00`
      const yearEnd = `${currentYear}-12-31T23:59:59`

      setStartDate(String(new Date(yearStart)))
      setEndDate(String(new Date(yearEnd)))
    }
  }
}
