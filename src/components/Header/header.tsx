import React from 'react'
import { Icon } from '../Icon'
import styles from './header.module.scss'

export const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Icon name="GRAPH" />
        <div>数字人文知识图谱平台</div>
      </div>
    </div>
  )
}
