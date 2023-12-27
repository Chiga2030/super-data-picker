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


const SuperDatePickerBox = ({
  changeStartDateCallback,
  changeEndDateCallback,
}: Props): JSX.Element => {
  const { date: startDate, setDate: setStartDate, } = useContext(StartDateContext)
  const { date: endDate, setDate: setEndDate, } = useContext(EndDateContext)

  const handleChangeStartDate = (value: string) => {
    changeStartDateCallback(value)
    if (setStartDate) {
      setStartDate(dayjs(value).format('DD.MM.YYYY HH:mm'))
    }
  }

  const handleChangeEndDate = (value: string) => {
    changeEndDateCallback(value)
    if (setEndDate) {
      setEndDate(dayjs(value).format('DD.MM.YYYY HH:mm'))
    }
  }


  return (
    <div className={ styles.wrapper }>
      <QuickSelectButton />
      <SelectStartDateButton changeDateCallback={ handleChangeStartDate }>
        { startDate ? startDate : 'Выбрать дату начала' }
      </SelectStartDateButton>

      <SelectStartDateButton changeDateCallback={ handleChangeEndDate }>
        { endDate ? endDate : 'Выбрать дату окончания' }
      </SelectStartDateButton>
    </div>
  )
}


export const SuperDatePicker = ({ ...props }: Props) => {
  return (
    <ContextProvider>
      <SuperDatePickerBox { ...props } />
    </ContextProvider>
  )
}
