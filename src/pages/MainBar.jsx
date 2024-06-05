import React from 'react'
import MainHeader from './MainHeader';
import MainCard from '../component/MainCard';
import img1b from '../assets/20mainCard.png'
import img1a from '../assets/20mainCarda.png'
import img2a from '../assets/22mainCarda.png'
import img2b from '../assets/22mainCardb.png'



const MainBar = () => {
    return (
        <div>
            <>
                <div>
                    <MainHeader></MainHeader>
                </div>
                <div className='h-[600px] overflow-y-auto'>
                    <div className='mt-[35px]'>
                        <MainCard profilePic={img1a} mainImage={img1b} username="@thewallart" name="Lara Leones" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout" likes="89.k" comment="8.6k" share="7.2k" ></MainCard>
                    </div>
                    <div className='mt-[35px]'>
                        <MainCard profilePic={img2a} mainImage={img2b} username="@thecustomcreater" name="Thomas J." content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." likes="59.2k" comment="10.9k" share="4.2k" ></MainCard>
                    </div>
                </div>

            </>
        </div>
    )
}

export default MainBar;