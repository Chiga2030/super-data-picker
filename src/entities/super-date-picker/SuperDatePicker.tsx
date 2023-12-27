import styles from './SuperDatePicker.module.scss'
import { SelectStartDateButton, } from './ui/SelectStartDateButton/SelectStartDateButton'


interface Props {
  changeStartDateCallback: (value: string) => void
  changeEndDateCallback: (value: string) => void
}


export const SuperDatePicker = ({
  changeStartDateCallback,
  changeEndDateCallback,
}: Props): JSX.Element => {
  return (
    <>
      <div className={ styles.wrapper }>
        <SelectStartDateButton changeDateCallback={ changeStartDateCallback }>Выбрать дату начала</SelectStartDateButton>
        <SelectStartDateButton changeDateCallback={ changeEndDateCallback }>Выбрать дату окончания</SelectStartDateButton>
      </div>
    </>
  )
}
