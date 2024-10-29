import React from 'react'
import styles from './PageHead.module.scss';

interface PageData {
    title: string
}

const PageHead: React.FC<PageData> = ({title}) => {
  return (
    <div className={styles.page_head}>
        <h1>{title}</h1>
    </div>
  )
}

export default PageHead