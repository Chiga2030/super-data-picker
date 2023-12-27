import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode, } from 'react'
import styles from './Button.module.scss'
import { clsx, } from 'clsx'


interface Props extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'link'
}


export const Button = ({
  children,
  variant = 'default',
  ...restProps
}: Props): JSX.Element => {
  return (
    <button
      className={ clsx(
        styles.button,
        {
          [ styles.button_default ]: variant === 'default',
          [ styles.button_link ]: variant === 'link',
        }
      ) }
      type={ 'button' }
      { ...restProps }
    >
      { children }
    </button>
  )
}
