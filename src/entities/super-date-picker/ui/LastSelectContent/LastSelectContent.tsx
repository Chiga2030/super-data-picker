import { useContext, } from 'react'
import { Title, } from '../../../../shared/Title'
import styles from './LastSelectContent.module.scss'
import { Button, } from '../../../../shared/Button'
import { EndDateContext, LastListContext, StartDateContext, } from '../../model/ContextProvider/ContextProvider'
import { formatIntervalName, } from '../../lib/utils/formatIntervalName'


export const LastSelectContent = (): JSX.Element => {
  const lastList = useContext(LastListContext)
  const { setDate: setStartDate, } = useContext(StartDateContext)
  const { setDate: setEndDate, } = useContext(EndDateContext)

  const handleSetDates = (dateStart: string, dateEnd: string) => {
    if (setStartDate && setEndDate) {
      setStartDate(dateStart)
      setEndDate(dateEnd)
    }
  }


  return (
    <div>
      <Title>
        Последние из использованных
      </Title>

      <ul className={ styles.list }>
        { lastList && lastList.map(({ dateStart, dateEnd, }) => (
          <li key={ dateStart + dateEnd } className={ styles.listItem }>
            <Button variant={ 'link' } onClick={ () => handleSetDates(dateStart, dateEnd) } >
              { formatIntervalName(dateStart, dateEnd) }
            </Button>
          </li>
        )) }
      </ul>
    </div>
  )
}
