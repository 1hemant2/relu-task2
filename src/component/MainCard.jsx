import React from 'react'
import menu from '../assets/17dot.png';
import likesIcon from '../assets/21heart.png';
import shareIcon from '../assets/18share.png';
import commentIcon from '../assets/19comment.png';
const MainCard = ({ profilePic, name, username, content, mainImage, likes, comment, share }) => {
    return (
        <>
            <div className="w-[620px] h-[600px] bg-[#FFFFFF] pl-[30px] pt-[30px]">
                <div className='flex justify-between'>
                    <div className='flex'>
                        <img src={profilePic} alt="" className='rounded-md' />
                        <div className='ml-[14px]'>
                            <div>{`${name}`}</div>
                            <div>{`${username}`}</div>
                        </div>
                    </div>
                    <img src={menu} alt="" className='h-[15px] w-[15px] text-[#4b4a4a] mr-6 mt-5' />
                </div>
                <p className='pt-[30px]'>
                    {`${content}`} <span className='text-pink-600'>Read more</span>
                </p>
                <img src={mainImage} alt="" className='h-[306px] w-[560px] rounded-md mt-[30px]' />
                <div className='flex space-x-[54px] pt-[63px] pl-[5px]'>
                    <div className='flex '>
                        <img src={likesIcon} alt="" className='w-[24px] h-[22px] mr-2' />
                        <span>{`${likes}`}</span>
                    </div>
                    <div className='flex'>
                        <img src={commentIcon} alt="" className='w-[24px] h-[22px] mr-2' />
                        <span>{`${comment}`}</span>
                    </div>
                    <div className='flex'>
                        <img src={shareIcon} alt="" className='w-[24px] h-[22px] mr-2' />
                        <span>{`${share}`}</span>
                    </div>
                </div>
            </div>
        </>


    )
}

export default MainCard;