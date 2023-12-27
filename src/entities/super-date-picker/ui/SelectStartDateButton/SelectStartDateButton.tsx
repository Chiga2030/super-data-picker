import { ReactNode, SetStateAction, } from 'react'
import { ButtonPopover, } from '../ButtonPopover/ButtonPopover'
import styles from './SelectStartDateButton.module.scss'


interface Props {
  children: ReactNode
  changeDateCallback: (value: string) => void
}


export const SelectStartDateButton = ({
  children,
  changeDateCallback,
}: Props): JSX.Element => {
  const handleClick = (setIsOpen: (value: SetStateAction<boolean>) => void) => {
    setIsOpen(prev => !prev)
  }


  return (
    <div className={ styles.wrapper }>
      <ButtonPopover changeDateCallback={ changeDateCallback }>
        { setIsOpen => (
          <button type={ 'button' } onClick={ () => handleClick(setIsOpen) }>
            { children }
          </button>
        ) }
      </ButtonPopover>
    </div>
  )
}
