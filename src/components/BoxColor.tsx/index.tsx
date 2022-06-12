import React from 'react'
import styles from './styles.module.scss';

interface IBoxColorProps {
  color: string
}

export default function BoxColor({
  color
}: IBoxColorProps) {
  return (
    <div className={styles.container} style={{ backgroundColor: color }} />
  )
}