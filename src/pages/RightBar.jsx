import React from 'react'
import RightHeader from './RightHeader';
import Card from '../component/Card';
import card1a from '../assets/12card1a.png'
import card1b from '../assets/12card1b.png'
import card13a from '../assets/13card1a.png'
import card13b from '../assets/13card1b.png'
import card14a from '../assets/14carda.png'
import card14b from '../assets/14cardb.png'
import card15a from '../assets/15carda.png'
import card15b from '../assets/15cardb.png'
import card16a from '../assets/16carda.png'



const RightBar = () => {
    return (
        <div>
            <div>
                <RightHeader></RightHeader>
            </div>

            <div className='mt-[35px] flex '>
                <span className='text-xl'>Artist</span>
                <span className='text-[#8D8D8D] text-xl ml-[24px]'>Photographers</span>
            </div>
            <div className='h-[550px] overflow-y-auto'>
                <div className='mt-[23px]'>
                    <Card img1={card1a} img2={card1b} text1="Thomas Edward" text2="@thewildwithyou"></Card>
                </div>
                <div className='mt-[30px]'>
                    <Card img1={card13a} img2={card13b} text1="Chris Doe" text2="@thewildwithyou"></Card>
                </div>
                <div className='mt-[30px]'>
                    <Card img1={card14a} img2={card14b} text1="Emilie Jones" text2="@thewildwithyou"></Card>
                </div>
                <div className='mt-[30px]'>
                    <Card img1={card15a} img2={card15b} text1="Jessica Williams" text2="@thewildwithyou"></Card>
                </div>
                <div className='mt-[30px]'>
                    <Card img1={card16a} img2={card13b} text1="Hemant Kumar" text2="@variation"></Card>
                </div>
            </div>
            <div className='space-x-5'>
                <span className='text-xs text-[#8D8D8D]'>
                    Privacy
                </span>
                <span className='text-xs text-[#8D8D8D]'>
                    Terms of Service
                </span>
                <span className='text-xs text-[#8D8D8D]'>
                    Cookie Notice
                </span>
            </div>
        </div>
    )
}

export default RightBar;