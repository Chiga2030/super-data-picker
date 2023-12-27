import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState, } from 'react'
import styles from './ButtonPopover.module.scss'
import { clsx, } from 'clsx'
import { Tabs, } from '../../../tabs'
import { AbsoluteDataInput, } from '../AbsoluteDataInput/AbsoluteDataInput'
import { RelativeDateInput, } from '../RelativeDateInput/RelativeDateInput'


interface Props {
  children: (setIsOpen: Dispatch<SetStateAction<boolean>>) => ReactNode
  changeDateCallback: (value: string) => void
}


export const ButtonPopover = ({
  children,
  changeDateCallback,
}: Props): JSX.Element => {
  const [ isOpen, setIsOpen, ] = useState(false)
  const popoverRef = useRef(null)


  useEffect(() => {
    const handleDomClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const popover = popoverRef.current as HTMLElement | null

      if (target && popover && !popover.contains(target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleDomClick)
    } else {
      document.removeEventListener('click', handleDomClick)
    }


    return () => {
      document.removeEventListener('click', handleDomClick)
    }
  }, [ isOpen, ])


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


  return (
    <div ref={ popoverRef }>
      <div className={ clsx(styles.popover, { [ styles.popover_open ]: isOpen, }) } >
        <Tabs tabList={ tabList } />
      </div>

      { children(setIsOpen) }
    </div>
  )
}
