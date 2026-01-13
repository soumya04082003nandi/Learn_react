import React from 'react'
import Button from './Button'

const Card = () => {
    return (
        <>
        <div className='p-5 mx-5 w-40 flex flex-col items-center justify-center bg-gray-900 border-dashed rounded-md '>
            <div className="w-30 h-30 rounded-lg border  overflow-hidden border-2 border-blue-300 mb-2">
                <img
                    className="w-full h-full object-cover "
                    src="/images/test.jpg"
                    alt="Profile"
                />
            </div>
            <h2 className="name font-light"> Soumya Nandi</h2>
            <h3 className=" text-xs role text-gray-400 font-light">Web Developer</h3>
            <div className="buttons w-full gap-4 justify-center flex-wrap flex mt-2 ">
                <Button />
                <Button />
                

            </div>

        </div>
        
        </>
    )
}

export default Card
