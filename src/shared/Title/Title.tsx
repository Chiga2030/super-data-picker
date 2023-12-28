import { ReactNode, } from 'react'
import styles from './Title.module.scss'


interface Props {
  children: ReactNode
}


export const Title = ({
  children,
}: Props): JSX.Element => {
  return (
    <h2 className={ styles.title }>
      { children }
    </h2>
  )
}
