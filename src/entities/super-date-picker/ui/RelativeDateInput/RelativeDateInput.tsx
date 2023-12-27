import { ChangeEvent, useState, } from 'react'

interface Props {
  changeDateCallback: (value: string) => void
}


const options = [
  {
    label: 'Минут',
    value: 60 * 1000,
  },
  {
    label: 'Часов',
    value: 60 * 60 * 1000,
  },
  {
    label: 'Дней',
    value: 60 * 60 * 24 * 1000,
  },
]


export const RelativeDateInput = ({
  changeDateCallback,
}: Props): JSX.Element => {
  const [ selectValue, setSelectValue, ] = useState(options[ 0 ].value)


  const handleChangeSelectValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(Number(event.target.value))
  }

  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value)
    const newDate = Date.now() + (inputValue * selectValue)

    changeDateCallback(String(new Date(newDate)))
  }


  return (
    <div>
      <input type={ 'number' } onChange={ handleChangeDate } />

      <select value={ selectValue } onChange={ handleChangeSelectValue }>
        { options.map(({ label, value, }) => (
          <option key={ value } value={ value }>{ label }</option>
        )) }
      </select>
    </div>
  )
}
