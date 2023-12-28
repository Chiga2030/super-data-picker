import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState, } from 'react'


interface DateContextProps {
  date: null | string,
  setDate: null | Dispatch<SetStateAction<string | null>>,
}


export const StartDateContext = createContext<DateContextProps>({
  date: null,
  setDate: null,
})


export const EndDateContext = createContext<DateContextProps>({
  date: null,
  setDate: null,
})


interface LastDate {
  dateStart: string
  dateEnd: string
}

type LastListContextProps = null | LastDate[]

export const LastListContext = createContext<LastListContextProps>(null)


interface Props {
  children: ReactNode
  onChangeStartDate: (value: Date) => void
  onChangeEndDate: (value: Date) => void
}


export const ContextProvider = ({
  children,
  onChangeEndDate,
  onChangeStartDate,
}: Props) => {
  const [ startDate, setStartDate, ] = useState<null | string>(null)
  const [ endDate, setEndDate, ] = useState<null | string>(null)
  const [ lastList, setLastList, ] = useState<LastDate[]>([])


  useEffect(() => {
    /**
     * Отправляем обновленные данные для полей с датами в callback переданный в компонент
     */
    if (startDate) {
      onChangeStartDate(new Date(startDate))
    }
  }, [ onChangeStartDate, startDate, ])

    if (endDate) {
      onChangeEndDate(new Date(endDate))
    }
  }, [ onChangeEndDate, endDate, ])


  useEffect(() => {
    /**
     * Обновляем список последних используемых дат.
     */
    if (startDate && endDate) {
      const newDate: LastDate = {
        dateStart: startDate,
        dateEnd: endDate,
      }

      setLastList(prev => {
        if (!prev.some(item => item.dateStart === startDate && item.dateEnd === endDate)) {
          /**
           * Если в списке нет такой даты, то просто добавляем ее в начало.
           */
          return [ newDate, ...prev, ]
        }

        /**
         * Если такая дата есть в списке, то пересобираем список.
         */
        const index = prev.findIndex(item => item.dateStart === startDate && item.dateEnd === endDate)
        if (index !== -1) {
          prev.splice(index, 1).splice(0, 0, newDate)
          return prev
        }

        return prev
      })
    }
  }, [ endDate, startDate, ])


  return (
    <StartDateContext.Provider value={ {
      date: startDate,
      setDate: setStartDate,
    } } >
      <EndDateContext.Provider
        value={ {
          date: endDate,
          setDate: setEndDate,
        } }
      >
        <LastListContext.Provider value={ lastList }>
          { children }
        </LastListContext.Provider>
      </EndDateContext.Provider>
    </StartDateContext.Provider>
  )
}
