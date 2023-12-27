import { ChangeEvent, } from 'react'
import styles from './AbsoluteDataInput.module.scss'


interface Props {
  changeDateCallback: (value: string) => void
}


export const AbsoluteDataInput = ({
  changeDateCallback,
}: Props): JSX.Element => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    changeDateCallback(event.target.value)
  }


  return (
    <div className={ styles.wrapper }>
      <input type={ 'date' } onChange={ changeHandler } />
    </div>
  )
}
