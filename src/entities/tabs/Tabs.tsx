import { clsx, } from 'clsx'
import { ReactNode, useState, } from 'react'
import styles from './Tabs.module.scss'


interface Props {
  tabList: {
    key: number
    title: string
    content: ReactNode
  }[]
}


export const Tabs = ({
  tabList,
}: Props): JSX.Element => {
  const [ activeTab, setActiveTab, ] = useState(1)


  return (
    <div className={ styles.wrapper }>
      <header className={ styles.header }>
        {
          tabList.map(({ title, key, }) => (
            <button
              key={ key }
              className={ clsx(styles.tab, { [ styles.tab_active ]: activeTab === key, }) }
              onClick={ () => setActiveTab(key) }
            >
              { title }
            </button>
          ))
        }
      </header>

      <div className={ styles.contentWrapper }>
        { tabList.map(({ content, key, }) => (
          <div className={ clsx(styles.content, { [ styles.content_active ]: key === activeTab, }) } key={ key }>
            { content }
          </div>
        )) }
      </div>
    </div>
  )
}
