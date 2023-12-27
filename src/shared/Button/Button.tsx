import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode, } from 'react'
import styles from './Button.module.scss'


interface Props extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
}


export const Button = ({
  children,
  ...restProps
}: Props): JSX.Element => {
  return (
    <button className={ styles.button } type={ 'button' } { ...restProps }>
      { children }
    </button>
  )
}
