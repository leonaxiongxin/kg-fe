import React from 'react'
import { ICON, ICONS } from './config'
import styles from './icon.module.scss'

export const Icon: React.FunctionComponent<{ name: string }> = ({ name }) => {
  const { viewBox, path }: ICON = ICONS[name]
  return (
    <div className={styles.icon}>
      <svg viewBox={viewBox}>
        <title>{name}</title>
        <path d={path} />
      </svg>
    </div>
  )
}
