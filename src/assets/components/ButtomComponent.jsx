import React from 'react'
import ProductCard from './ProductCard'

const ButtomComponent = (props) => {
  return (
    
    <div className='w-screen h-full flex-nowrap overflow-hidden overflow-x-auto px-20 py-5 flex  gap-10   '>
      {
        props.data.map((elem,index)=>{
          
          
          return(<ProductCard key={index} data={elem} />)
        }
      )}
      
      
    </div>
  )
}

export default ButtomComponent
