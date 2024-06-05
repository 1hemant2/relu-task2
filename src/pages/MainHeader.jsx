import React from 'react'
import searchIcon from '../assets/1.searchIcon.png';
import filterIcon from '../assets/2.filter.png';

const MainHeader = () => {
    return (
        <div className='font-semibold bg-white h-[80px] rounded-sm flex items-center'>
            <div className='flex w-full justify-between px-4'>
                <div className='flex items-center'>
                    <img src={searchIcon} className='h-5 w-5 mr-2' alt="" />
                    <span className='text-sm text-[#9A9A9E]'>Search here...</span>
                </div>
                <div className='flex items-center'>
                    <img src={filterIcon} className='h-8 w-8 mr-2' alt="" />
                    <span>Filters</span>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;