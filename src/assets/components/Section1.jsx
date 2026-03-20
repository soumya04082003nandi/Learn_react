import React from 'react'
import TopComponent from './TopComponent'
import ButtomComponent from './ButtomComponent'
import {CardData} from './utils/cardData'



const Section1 = () => {
  return (
    <div className='h-full'>
      <TopComponent/>
      <ButtomComponent data={CardData}/>
    </div>
  )
}

export default Section1
