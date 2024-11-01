import React from 'react'
import HeadSearch from './HeadSearch/HeadSearch'

interface PageData {
    title: string
}

const PageHead: React.FC<PageData> = ({title}) => {
  return (
    <div className='page-head'>
      <div className="page-head_wrapper">
        <h1 className='page-head_title'>{title}</h1>
        <HeadSearch />
      </div>
    </div>
  )
}

export default PageHead