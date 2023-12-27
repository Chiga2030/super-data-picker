import { useContext, } from 'react'
import { Button, } from '../../../../shared/Button'
import styles from './QuickSelectContent.module.scss'
import { EndDateContext, StartDateContext, } from '../../model/ContextProvider/ContextProvider'
import { quickSetDates, } from '../../lib/utils/quickSetDates'
import { commonlyUsedList, } from '../../lib/constants/commonlyUsedList'


export const QuickSelectContent = (): JSX.Element => {
  const { setDate: setStartDate, } = useContext(StartDateContext)
  const { setDate: setEndDate, } = useContext(EndDateContext)


  return (
    <div className={ styles.wrapper }>
      <h2 className={ styles.title }>Обычно используются</h2>

      <ul className={ styles.list }>
        { commonlyUsedList.map(({ label, value, }) => (
          <li key={ label } className={ styles.listItem }>
            <Button variant={ 'link' } onClick={ () => quickSetDates(value, setStartDate, setEndDate) }>
              { label }
            </Button>
          </li>
        )) }
      </ul>
    </div>
  )
}
