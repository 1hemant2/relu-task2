import React from 'react'

const Card = ({ img1, img2, text1, text2 }) => {
    return (
        <div className="w-[244px] h-[126px] rounded-sm relative  bg-opacity-5">
            <img src={img1} alt="" className='w-full h-full object-cover ' />
            <div className="absolute left-[14px] bottom-[14px]">
                <img src={img2} alt="" className="relative w-full h-full object-cover" />
                <span className="absolute top-[2px] right-[2px] h-[12px] w-[12px] bg-[#0EC297] rounded-full"></span>
            </div>
            <span className="absolute bottom-[42px] left-[80px] text-[#FFFFFF] text-xl">{`${text1}`}</span>
            <span className="absolute bottom-[18px] left-[80px] text-white text-sm">{`${text2}`}</span>
        </div>
    )
}

export default Card;