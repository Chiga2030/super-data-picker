import { ReactNode, SetStateAction, } from 'react'
import { ButtonPopover, } from '../ButtonPopover/ButtonPopover'
import styles from './SelectStartDateButton.module.scss'
import { Button, } from '../../../../shared/Button'
import { Tabs, } from '../../../../shared/Tabs'
import { AbsoluteDataInput, } from '../AbsoluteDataInput/AbsoluteDataInput'
import { RelativeDateInput, } from '../RelativeDateInput/RelativeDateInput'


interface Props {
  children: ReactNode
  changeDateCallback: (value: string) => void
}


export const SelectStartDateButton = ({
  children,
  changeDateCallback,
}: Props): JSX.Element => {
  const tabList = [ {
    key: 1,
    title: 'Абсолютная дата',
    content: (
      <AbsoluteDataInput changeDateCallback={ changeDateCallback } />
    ),
  }, {
    key: 2,
    title: 'Относительная дата',
    content: (
      <RelativeDateInput changeDateCallback={ changeDateCallback } />
    ),
  }, ]


  const handleClick = (setIsOpen: (value: SetStateAction<boolean>) => void) => {
    setIsOpen(prev => !prev)
  }


  return (
    <div className={ styles.wrapper }>
      <ButtonPopover popoverContent={ <Tabs tabList={ tabList } /> }>
        { setIsOpen => (
          <Button onClick={ () => handleClick(setIsOpen) }>
            { children }
          </Button>
        ) }
      </ButtonPopover>
    </div>
  )
}
