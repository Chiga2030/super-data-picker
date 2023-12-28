import { SuperDatePicker, } from '../entities/super-date-picker'
import styles from './App.module.scss'


function App () {
  const changeStartDateCallback = (value: Date) => {
    console.log(value)
  }

  const changeEndDateCallback = (value: Date) => {
    console.log(value)
  }


  return (
    <main className={ styles.main }>
      <SuperDatePicker
        onChangeStartDate={ changeStartDateCallback }
        onChangeEndDate={ changeEndDateCallback }
      />
    </main>
  )
}

export default App
