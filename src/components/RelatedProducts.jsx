import React from 'react'
import { RelatedProductsData } from '../Data'

const RelatedProducts = () => {
  return (
    <>
   
    <div className='grid justify-center mt-12 font-signika'>
        <div className='mx-auto'>
            <b>Related Products:</b>
        </div>
        
        <div className='flex space-x-4'>
            {RelatedProductsData.map((data) => (
                <div key={data.id} className='max-w-xs grid text-center'>
                <img src={data.img} alt="cyclecore" className='w-40 mx-auto' /> 
                <span className='text-gray-400'>{data.brand}</span>
                <b>{data.title}</b>
                <b>php {data.price}</b>
                </div>
            ))}
        </div>
    </div>
        
    </>
  )
}

export default RelatedProducts