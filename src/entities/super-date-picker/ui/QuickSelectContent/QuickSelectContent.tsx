import { useContext, } from 'react'
import { Button, } from '../../../../shared/Button'
import styles from './QuickSelectContent.module.scss'
import { EndDateContext, StartDateContext, } from '../../model/ContextProvider/ContextProvider'
import { quickSetDates, } from '../../lib/utils/quickSetDates'
import { commonlyUsedList, } from '../../lib/constants/commonlyUsedList'
import { Title, } from '../../../../shared/Title'


export const QuickSelectContent = (): JSX.Element => {
  const { setDate: setStartDate, } = useContext(StartDateContext)
  const { setDate: setEndDate, } = useContext(EndDateContext)


  return (
    <div className={ styles.wrapper }>
      <Title>Обычно используются</Title>

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
