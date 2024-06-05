import React from 'react'
import star from '../assets/37star.svg'

const BottomCard = ({ img1, desc, price }) => {
    return (
        <div className="w-[252px] h-[250px]">
            <img src={img1} alt="" className='w-[252px] h-[180px] object-cover rounded-md' />
            <p className='text-sm mt-2 mb-2'>{`${desc}`}</p>
            <div className="flex justify-between">
                <p className='font-mono'>{`${price}`}</p>
                <div className="flex">
                    <img src={star} alt="" className='h-[14px] w-[14px]' />
                    <img src={star} alt="" className='h-[14px] w-[14px]' />
                    <img src={star} alt="" className='h-[14px] w-[14px]' />
                    <img src={star} alt="" className='h-[14px] w-[14px]' />
                    <img src={star} alt="" className='h-[14px] w-[14px]' />
                </div>
            </div>


        </div>
    )
}

export default BottomCard;