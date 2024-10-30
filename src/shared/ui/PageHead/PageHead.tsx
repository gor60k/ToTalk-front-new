import React from 'react'

interface PageData {
    title: string
}

const PageHead: React.FC<PageData> = ({title}) => {
  return (
    <div className='page-head'>
        <h1>{title}</h1>
    </div>
  )
}

export default PageHead