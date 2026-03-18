import React from 'react'
import TopLeft from './TopLeft'
import TopRight from './TopRight'

const TopComponent = () => {
  return (
    <div className='w-screen px-12 py-10 flex justify-center  '>
      <TopLeft/>
      <TopRight/>
    </div>
  )
}

export default TopComponent
