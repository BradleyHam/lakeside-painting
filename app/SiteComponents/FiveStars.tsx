import React from 'react'
import { FaStar } from "react-icons/fa"

function FiveStars() {
  return (
    <div className="star-row flex flex-row items-start space-x-1">
    <FaStar className='text-backdrop'/>
    <FaStar className='text-backdrop'/>
    <FaStar className='text-backdrop'/>
    <FaStar className='text-backdrop'/>
    <FaStar className='text-backdrop'/>
</div>
  )
}

export default FiveStars