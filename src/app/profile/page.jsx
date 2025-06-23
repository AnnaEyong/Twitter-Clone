import React from 'react'
import Link from 'next/link';
import { FaTwitter } from "react-icons/fa";
import { RiHomeHeartFill } from "react-icons/ri";
import { HiOutlineHashtag } from "react-icons/hi2";
import { VscBell } from "react-icons/vsc";
import { LuMail } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6"
import { CgMoreO } from "react-icons/cg";
import { GoArrowLeft } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineGif } from "react-icons/ai";
import { PiChartBarHorizontal } from "react-icons/pi";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarTime } from "react-icons/tb";
import { TfiComment } from "react-icons/tfi";
import { GiHearts } from "react-icons/gi";
import { LuUpload } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { ModeToggle } from '../../components/toggle/ModeToggle';


export default function page() {
  return (
    <section className='grid grid-cols-[1fr_3fr_1.3fr] gap-2 px-[6%]'>
      {/* GRID 1 */}
          <aside className='flex flex-col justify-between h-screen py-[6%]'>
            <ul className='flex flex-col gap-5 text-[.9rem] font-semibold fixed'>
                <li className='flex gap-3'><FaTwitter size={20}/></li>
                <Link href='/' className='flex gap-3 items-center focus:text-primary'><RiHomeHeartFill size={20}/>Home</Link>
                <li className='flex gap-3 items-center'><HiOutlineHashtag size={20}/>Explore</li>
                <li className='flex gap-3 items-center'><VscBell size={20}/>Notifications</li>
                <li className='flex gap-3 items-center'><LuMail size={20}/>Messages</li>
                <li className='flex gap-3 items-center'><IoBookmarkOutline size={20}/>Bookmarks</li>
                <li className='flex gap-3 items-center'><CgNotes size={20}/>Lists</li>
                <li className='flex gap-3 items-center text-primary'><FaRegUser size={20}/>Profile</li>
                <li className='flex gap-3 items-center'><CgMoreO size={20}/>More</li>
                <li className='flex gap-2 items-center'><ModeToggle />Theme</li>
                <button className='bg-primary rounded-full font-medium py-2 text-[.9rem] text-white'>Tweet</button>
      
                 <div className='flex gap-2 items-center mt-[3rem]'>
              <img src='/Profile Picture.png' alt='profile' className='rounded-full w-10 h-10'/>
              <div className='text-[.8rem]'>
                <p className='font-medium'>Jerome Bell</p>
                <p className='text-gray-500'>@afonsoinocente</p>
              </div>
            </div>
            </ul>
          </aside>
      {/* END OF GRID 1 */}

      {/* GRID 2 */}
      <main className='border-1 border-secondary'>
        <div className='py-[1%] px-[2%] flex items-center gap-3'>
            <GoArrowLeft className='text-primary'/>
            <div className='text-[.8rem]'>
                <p className='font-semibold'>Name</p>
                <p className='text-gray-500 text-[.7rem]'>9 tweets</p>
            </div>
        </div>

        <div>
            <img src='Cover.png' alt='img' className='w-full'/>
            <div className='px-[2%] flex justify-between text-[.8rem] items-end mt-[-3.5rem]'>
                <img src='Profile Picture.png' alt='img' className='w-24 h-24 rounded-full border-2 border-background' />
                <button className='border-1 border-primary text-primary px-3 py-1 rounded-full h-fit'>Edit profile</button>
            </div>
        </div>

        <div className='px-[2%] py-[1%]'>
            <p className='font-semibold'>Jerome Bell</p>
            <p className='text-gray-500 text-[.8rem] mt-[-.3rem]'>@afonsoinocente</p>
            <p className='text-[.8rem]'>Product Designer</p>
            <div className='flex gap-3 items-center'>
                <p className='text-gray-500 text-[.8rem] flex items-center gap-2'><GrLocation />London</p>
                <p className='text-gray-500 text-[.8rem] flex items-center gap-2'><FaRegCalendarAlt />Joined September 2011</p>
            </div>
            <div className='flex gap-3 items-center'>
                <p className='text-[.8rem] font-semibold'>569 <span className='text-gray-500 font-normal'>Following</span></p>
                <p className='text-[.8rem] font-semibold'>72 <span className='text-gray-500 font-normal'>Followers</span></p>
            </div>
        </div>

            <ul className='text-gray-500 text-[.8rem] flex items-center justify-between font-semibold px-[8%]'>
                <li className='text-primary border-b-2 border-primary px-[3%] py-[2%]'>Tweets</li>
                <li className='py-[1%] px-[3%]'>Tweets Replies</li>
                <li className='py-[1%] px-[3%]'>Media</li>
                <li className='py-[1%] px-[3%]'>Likes</li>
            </ul>

            
      <div className='flex flex-col gap-4 px-[3%] py-[2%]'>
      <div className='flex gap-2 items-center'>
        <img src='/Profile Picture.png' alt='profile' className='rounded-full w-10 h-10'/>
        <div className='text-[.8rem]'>
          <p className='font-semibold'>Devon Lane<span className='text-gray-500'> @marcelosalomao · 23s</span></p>
          <p className='font-medium text-[.9rem]'>Is this big enough for you?</p>
        </div>
      </div>

    <div className='pl-[7.5%] text-[.85rem]'>
      <img src='space1.png' alt='tweet' className='rounded-2xl w-full border-1 border-secondary'/>
      <ul className='flex gap-6 items-center justify-between w-[80%] py-[3%]'>
        <li className='text-gray-500 flex gap-3 items-center'><TfiComment size={18}/>61</li>
        <li className='text-gray-500 flex gap-3 items-center'><TfiComment size={18}/>12</li>
        <li className='text-red-500 flex gap-3 items-center'><GiHearts size={15}/>6.2K</li>
        <li className='text-gray-500 flex gap-3 items-center'><LuUpload size={18}/>61</li>
      </ul>
      <p className='text-primary'>Show this thread</p>
    </div>

  </div>

      </main>
{/* END OF GRID 2 */}

{/* GRID 3 */}
    <aside className='px-[3%] py-[2%] flex flex-col gap-3 sticky top-0 h-[110vh]'>
        <div className='text-[.8rem] flex items-center gap-3 py-1 px-3 rounded-full bg-secondary'>
          <CiSearch /><input type='search' placeholder='Search Twitter' className='outline-none'/>
      </div>

      <div className='border-1 border-secondary rounded-lg bg-secondary'>
        <div className='px-[4%] py-[3%] text-[.8rem] font-semibold'>You might like</div>

        <div className='text-[.7rem] flex justify-between items-center gap-3 py-[3%] px-[4%] border-t-1 border-secondary'>
          <img src='covid.png' alt='photo' className='rounded-full h-10 w-10'/>
          <div>
            <p className='font-semibold'>Bessie Cooper</p>
            <p className='text-gray-500'>@alessandroveronezi</p>
          </div>
          <button className='border-1 border-primary text-primary px-3 py-1 rounded-full'>Follow</button>
        </div>

        <div className='text-[.7rem] flex justify-between items-center gap-3 py-[3%] px-[4%] border-t-1 border-secondary'>
          <img src='covid.png' alt='photo' className='rounded-full h-10 w-10'/>
          <div>
            <p className='font-semibold'>Bessie Cooper</p>
            <p className='text-gray-500'>@alessandroveronezi</p>
          </div>
          <button className='border-1 border-primary text-primary px-3 py-1 rounded-full'>Follow</button>
        </div>

        <div className='flex items-center py-[3%] px-[4%] border-t-1 border-secondary text-primary text-[.7rem]'>
          Show more
        </div>
      </div>

      <div className='border-1 border-secondary rounded-lg bg-secondary'>
        <div className='px-[4%] py-[3%] text-[.8rem] font-semibold'>What's happening?</div>

        <div className='flex items-center gap-3 py-[3%] px-[4%] border-t-1 border-secondary'>
          <div className='text-[.7rem]'>
            <p className='text-gray-500 text-[.6rem] font-semibold'>COVID 19 · Last night</p>
            <p className='font-semibold'>England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</p>
            <p className='text-gray-500 text-[.6rem] font-semibold'>Trending with <span className='text-primary'>#covid19</span></p>
          </div>
          <img src='covid.png' alt='photo' className='rounded-lg'/>
        </div>

        <div className='flex items-center gap-3 py-[3%] px-[4%] border-t-1 border-secondary'>
          <div className='text-[.7rem]'>
            <p className='text-gray-500 text-[.6rem] font-semibold'>US news · 4h ago</p>
            <p className='font-semibold'>Parler may go offline following suspensions by Amazon, Apple and Google</p>
            <p className='text-gray-500 text-[.6rem] font-semibold'>Trending with <span className='text-primary'>#trump</span></p>
          </div>
          <img src='trump.png' alt='photo' className='rounded-lg'/>
        </div>

        <div className='flex items-center gap-3 py-[3%] px-[4%] border-t-1 border-secondary'>
          <div className='text-[.7rem]'>
            <p className='text-gray-500 text-[.6rem] font-semibold'>India · 1h ago</p>
            <p className='font-semibold'>India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test</p>
            <p className='text-gray-500 text-[.6rem] font-semibold'>Trending with <span className='text-primary'>#sport</span></p>
          </div>
          <img src='sport.png' alt='photo' className='rounded-lg'/>
        </div>

        <div className='flex items-center py-[3%] px-[4%] border-t-1 border-secondary text-primary text-[.7rem]'>
          Show more
        </div>

      </div>
    </aside>
    </section>
  )
}
