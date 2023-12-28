import dayjs from 'dayjs'


export const formatIntervalName = (dateStart: string, dateEnd: string) => {
  /**
   * Склеивает даты начала и конца и ставит между ними стрелочку.
   */
  const start = dayjs(dateStart).format('DD.MM.YYYY HH:mm')
  const end = dayjs(dateEnd).format('DD.MM.YYYY HH:mm')

  return `${start} ⇨ ${end}`
}
