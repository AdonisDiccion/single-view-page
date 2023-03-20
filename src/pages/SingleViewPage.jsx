import React from 'react'
import AddToCartSection from '../components/AddToCartSection'
import MainProductDescription from '../components/MainProductDescription'
import RelatedProducts  from '../components/RelatedProducts'
import TechSpecs from '../components/TechSpecs'

const SingleViewPage = () => {
  return (
    <div>
        <AddToCartSection/>
        <RelatedProducts/>
        <MainProductDescription/>
        <TechSpecs/>
    </div>
  )
}

export default SingleViewPage