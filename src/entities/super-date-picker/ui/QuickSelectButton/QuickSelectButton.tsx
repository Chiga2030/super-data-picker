import { SetStateAction, } from 'react'
import { Button, } from '../../../../shared/Button'
import { ReactComponent as Icon, } from '../../lib/images/settings.svg'
import { ButtonPopover, } from '../ButtonPopover/ButtonPopover'
import styles from './QuickSelectButton.module.scss'
import { QuickSelectContent, } from '../QuickSelectContent/QuickSelectContent'


export const QuickSelectButton = (): JSX.Element => {
  const handleClick = (setIsOpen: (value: SetStateAction<boolean>) => void) => {
    setIsOpen(prev => !prev)
  }


  return (
    <div className={ styles.wrapper }>
      <ButtonPopover popoverContent={ <QuickSelectContent /> } >
        { setIsOpen => (
          <Button onClick={ () => handleClick(setIsOpen) }>
            <Icon className={ styles.icon } />
          </Button>
        ) }
      </ButtonPopover>
    </div>
  )
}
