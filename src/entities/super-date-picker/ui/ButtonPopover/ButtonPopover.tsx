import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState, } from 'react'
import styles from './ButtonPopover.module.scss'
import { clsx, } from 'clsx'


interface Props {
  children: (setIsOpen: Dispatch<SetStateAction<boolean>>) => ReactNode
  popoverContent: ReactNode
}


export const ButtonPopover = ({
  children,
  popoverContent,
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


  return (
    <div ref={ popoverRef }>
      <div className={ clsx(styles.popover, { [ styles.popover_open ]: isOpen, }) } >
        { popoverContent }
      </div>

      { children(setIsOpen) }
    </div>
  )
}
