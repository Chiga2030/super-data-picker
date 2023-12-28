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


interface Props {
  children: ReactNode
  changeStartDateCallback: (value: string) => void
  changeEndDateCallback: (value: string) => void
}


export const ContextProvider = ({
  children,
  changeEndDateCallback,
  changeStartDateCallback,
}: Props) => {
  const [ startDate, setStartDate, ] = useState<null | string>(null)
  const [ endDate, setEndDate, ] = useState<null | string>(null)


  useEffect(() => {
    /**
     * Отправляем обновленные данные для полей с датами в callback переданный в компонент
     */
      changeStartDateCallback(startDate)
      changeEndDateCallback(endDate)
    }
  }, [
    changeEndDateCallback,
    changeStartDateCallback,
    endDate,
    startDate,
  ])


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
        { children }
      </EndDateContext.Provider>
    </StartDateContext.Provider>
  )
}
