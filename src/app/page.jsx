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
import { ModeToggle } from '../components/toggle/ModeToggle';
import {auth, currentUser} from '@clerk/nextjs/server'
import { redirect} from 'next/navigation'

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default async function page() {
  const { userId } = await auth()
    if (!userId) {
      redirect('/auth/signup')
    }
  return (
    <section className='grid grid-cols-[1fr_3fr_1.3fr] gap-2 px-[6%]'>

{/* GRID 1 */}
    <aside className='flex flex-col justify-between h-screen py-[6%]'>
      <ul className='flex flex-col gap-5 text-[.9rem] font-semibold fixed'>
          <li className='flex gap-3'><FaTwitter size={20} className='text-primary'/></li>
          <li className='flex gap-3 items-center text-primary'><RiHomeHeartFill size={20}/>Home</li>
          <li className='flex gap-3 items-center'><HiOutlineHashtag size={20}/>Explore</li>
          <li className='flex gap-3 items-center'><VscBell size={20}/>Notifications</li>
          <li className='flex gap-3 items-center'><LuMail size={20}/>Messages</li>
          <li className='flex gap-3 items-center'><IoBookmarkOutline size={20}/>Bookmarks</li>
          <li className='flex gap-3 items-center'><CgNotes size={20}/>Lists</li>
          <Link href='/profileedit' className='flex gap-3 items-center focus:text-primary'><FaRegUser size={20}/>Profile</Link>
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
        <div className='flex justify-between items-center border-b-1 border-secondary px-[3%] py-[1%] font-semibold'>Home
          <div className='flex gap-2'>
          {/* <Link href='/SignUp' className='flex gap-3 font-medium hover:text-primary transition duration-3s'>
          Sign Up
            </Link>

            <Link href='/signIn' className='flex gap-3 font-medium border-l-1 border-white/10 pl-2 hover:text-primary transition duration-3s'>
          Sign in
            </Link> */}
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

      <div>
        <div className='flex gap-2 items-center px-[3%] py-[1%] text-[.85rem]'>
            <img src='/Profile Picture.png' alt='profile' className='rounded-full w-10 h-10'/>
            <input type='text' placeholder="What's happening?" className='text-gray-500 font-semibold w-full' />
        </div>

        <div className='flex items-center justify-between px-[2%] pb-[2%]'>
          <ul className='flex gap-3 items-center px-[7.5%]'>
            <li><HiOutlinePhotograph size={25} className='text-primary'/></li>
            <li><AiOutlineGif size={25} className='text-primary'/></li>
            <li><PiChartBarHorizontal size={25} className='text-primary'/></li>
            <li><VscSmiley size={25} className='text-primary'/></li>
            <li><TbCalendarTime size={25} className='text-primary'/></li>
          </ul>
           <button className='bg-primary rounded-full font-medium py-2.5 px-6 text-[.9rem] text-white'>Tweet</button>
        </div>
      </div> 

      <div className='flex flex-col gap-4 px-[2%] py-[1%] border-y-1 border-secondary'></div>

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


<div className='flex flex-col gap-4 px-[3%] py-[2%] border-t-1 border-secondary'>
      <div className='flex gap-2 items-center'>
        <img src='/Profile Picture.png' alt='profile' className='rounded-full w-10 h-10'/>
        <div className='text-[.8rem]'>
          <p className='font-semibold'>Esther Howard<span className='text-gray-500'> @andrebiachi · 23s</span></p>
          <p className='font-medium text-[.9rem]'>Are you ready for your big date?</p>
        </div>
      </div>

    <div className='pl-[7.5%] text-[.85rem]'>
      <img src='table.png' alt='tweet' className='rounded-2xl w-full border-1 border-secondary'/>
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
    <aside className='px-[3%] py-[2%] flex flex-col gap-3 sticky top-0 h-[120vh]'>
      <div className='text-[.8rem] flex items-center gap-3 py-1 px-3 rounded-full bg-secondary'>
          <CiSearch /><input type='search' placeholder='Search Twitter' className='outline-none w-full'/>
      </div>

      <div className='rounded-lg bg-secondary'>
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

      <div className='border-1 border-secondary rounded-lg bg-secondary'>
        <div className='px-[4%] py-[3%] text-[.8rem] font-semibold'>Who to follow</div>

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

      <div className='text-gray-500 text-[.7rem]'>Terms of Service Privacy Policy Cookie Policy
            Ads info More © 2021 Twitter, Inc.</div>
      
    </aside>
{/* END OF GRID 3 */}
    </section>
  )
}

{/* <div>
            <img src='/photo.png' alt='tweet'/>
            <img src='/GIF.png' alt='tweet'/>
            <img src='/Poll.png' alt='tweet'/>
            <img src='/emoji.png' alt='tweet'/>
            <img src='/schedule.png' alt='tweet'/>
          </div> */}