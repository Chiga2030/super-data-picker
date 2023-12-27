import { Dispatch, ReactNode, SetStateAction, createContext, useState, } from 'react'


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


export const ContextProvider = ({ children, }: { children: ReactNode }) => {
  const [ startDate, setStartDate, ] = useState<null | string>(null)
  const [ endDate, setEndDate, ] = useState<null | string>(null)


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
