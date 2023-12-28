import { useContext, } from 'react'
import styles from './SuperDatePicker.module.scss'
import { QuickSelectButton, } from './ui/QuickSelectButton/QuickSelectButton'
import { SelectStartDateButton, } from './ui/SelectStartDateButton/SelectStartDateButton'
import dayjs from 'dayjs'
import { ContextProvider, EndDateContext, StartDateContext, } from './model/ContextProvider/ContextProvider'


interface Props {
  changeStartDateCallback: (value: string) => void
  changeEndDateCallback: (value: string) => void
}


const SuperDatePickerBox = (): JSX.Element => {
  const { date: startDate, setDate: setStartDate, } = useContext(StartDateContext)
  const { date: endDate, setDate: setEndDate, } = useContext(EndDateContext)

  const handleChangeStartDate = (value: string) => {
    const newDate = dayjs(value)
    if (setStartDate && newDate.isValid()) {
      setStartDate(String(newDate))
    }
  }

  const handleChangeEndDate = (value: string) => {
    const newDate = dayjs(value)
    if (setEndDate && newDate.isValid()) {
      setEndDate(String(newDate))
    }
  }


  return (
    <div className={ styles.wrapper }>
      <QuickSelectButton />
      <SelectStartDateButton changeDateCallback={ handleChangeStartDate }>
        { startDate ? dayjs(startDate).format('DD.MM.YYYY HH:mm') : 'Выбрать дату начала' }
      </SelectStartDateButton>

      <SelectStartDateButton changeDateCallback={ handleChangeEndDate }>
        { endDate ? dayjs(endDate).format('DD.MM.YYYY HH:mm') : 'Выбрать дату окончания' }
      </SelectStartDateButton>
    </div>
  )
}


export const SuperDatePicker = ({ ...props }: Props) => {
  return (
    <ContextProvider { ...props }>
      <SuperDatePickerBox />
    </ContextProvider>
  )
}
