import React from 'react'
import LeftHeader from './LeftHeader';
import homeIcon from '../assets/3.homeIcon.svg';
import notificationIcon from '../assets/4.notificationIcon.svg';
import heartIcon from '../assets/5heart.svg';
import messageIcon from '../assets/6message.svg';
import walletIcon from '../assets/7wallet.svg';
import favoriteIcon from '../assets/8favorite.svg';
import profileIcon from '../assets/9profile.svg';
import settingIcon from '../assets/10setting.svg';
import logoutIcon from '../assets/11logout.svg';

const LeftBar = () => {
    return (
        <div>
            <div className="">
                <LeftHeader></LeftHeader>
            </div>
            <div className='mt-[35px] pt-[35px] h-[590px] bg-white '>
                <div className="ml-5 space-y-6 ">
                    <div className="flex"><img src={homeIcon} alt="" className='ml-4 mr-4 ' /> <span className='text-[#101010] font-[normal normal 600 16px/19px Gilroy]'>Home</span></div>
                    <div className="flex"><img src={notificationIcon} alt="" className='ml-4 mr-4 text-[#8D8D8D]' /> <span className='text-[#8D8D8D]'>Notifications</span></div>
                    <div className="flex"><img src={heartIcon} alt="" className='ml-4 mr-4 text-[#8D8D8D]' /> <span className='text-[#8D8D8D]'>Shop</span></div>
                    <div className="flex"><img src={messageIcon} alt="" className='ml-4 mr-4 text-[#8D8D8D]' /> <span className='text-[#8D8D8D]'>Conversation</span></div>
                    <div className="flex"><img src={walletIcon} alt="" className='ml-4 mr-4 text-[#8D8D8D]' /> <span className='text-[#8D8D8D]'>Wallet</span></div>
                    <div className="flex"><img src={favoriteIcon} alt="" className='ml-4 mr-4 text-[#8D8D8D]' /> <span className='text-[#8D8D8D]'>Subscrition</span></div>
                    <div className="flex"><img src={profileIcon} alt="" className='ml-4 mr-4 text-[#8D8D8D]' /> <span className='text-[#8D8D8D]'>My Profile</span></div>
                    <div className="flex"><img src={settingIcon} alt="" className='ml-4 mr-4 text-[#8D8D8D]' /> <span className='text-[#8D8D8D]'>Setting</span></div>
                    <div className="flex absolute bottom-20"><img src={logoutIcon} alt="" className='ml-4 mr-4 text-[#88C2BB] ' /> <span className='text-[#88C2BB]'>Logout</span></div>
                </div>
            </div>
            <div className="flex pt-2"><span className="text-xs font-thin">2024@logo</span> <span className='text-xs font-thin ml-8'>Developed by Hemant Kumar</span> </div>
        </div>
    )
}

export default LeftBar;