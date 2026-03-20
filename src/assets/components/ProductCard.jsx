import React from 'react'

const ProductCard = (props) => {
    console.log(props.data);
    
    return (
        
        
        <div className='h-90 w-70 shrink-0 rounded-3xl overflow-hidden  relative object-cover '>
            <img className='w-full h-full object-cover rounded-2xl' src={props.data.img} alt="" />
            <div className='absolute h-full flex flex-col justify-between top-0 left-0 w-full p-6 '>
                <h3>{props.data.brand}</h3>
                <div className='flex flex-col h-30 p-2 justify-between items-center'>
                    <p className='text-xs font-normal  backdrop-blur-sm shadow-lg text-black p-2 mb-2 rounded-md'>{props.data.intro}</p>
                    <div className="btns w-full flex px-2 justify-between">
                        <button className='bg-orange-400 px-3 py-2 font-medium text-sm rounded-full'> Buy Now</button>
                        <button className='bg-blue-600 px-3 py-2 font-medium text-sm rounded-full'>add to cart</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductCard
