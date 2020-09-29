import React from 'react'
import styles from './footer.module.scss'

export const Footer: React.FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        江苏省数据工程与知识服务重点实验室 © 2020
      </div>
    </div>
  )
}
