import React from 'react'
import MainHeader from './MainHeader';
import MainCard from '../component/MainCard';
import img1b from '../assets/20mainCard.png'
import img1a from '../assets/20mainCarda.png'
import img2a from '../assets/22mainCarda.png'
import img2b from '../assets/22mainCardb.png'
import BottomCard from '../component/BottomCard';
import imgb2 from '../assets/33bottomCard.png'
import imgb1 from '../assets/34bottomCard.png'
import imgb3 from '../assets/35bottomCard.png'
import imgb4 from '../assets/36bottomCard.png'



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
                    <div className=" mt-[35px]">
                        <div className=" overflow-x-auto w-[620px] flex space-x-6 overflow-y-hidden">
                            <div className="flex flex-shrink-0">
                                <BottomCard img1={imgb1} desc="old penting framed" price="$210"></BottomCard>
                            </div>
                            <div className="flex flex-shrink-0">
                                <BottomCard img1={imgb2} desc="Modern Wall Decor Framed Painting" price="$199.99"></BottomCard>
                            </div>

                            <div className="flex flex-shrink-0">
                                <BottomCard img1={imgb4} desc="Modern Wall Decor Framed Painting" price="$203.93"></BottomCard>
                            </div>
                            <div className="flex flex-shrink-0">
                                <BottomCard img1={imgb3} desc="oil painted framed image" price="$189"></BottomCard>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        </div>
    )
}

export default MainBar;