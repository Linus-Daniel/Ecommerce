import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { HiMenu, HiOutlineXCircle } from 'react-icons/hi'
import UserData from './UserData'
import SideBar from './sideBar'


export const Logo = logo
function Header() {
    const [aside,setAside] = useState()
    return (
    <div>
        <div className='container flex justify-between px-5 items-center text-2xl py-5'>
        <button onClick={()=>setAside(true)}>

        <HiMenu className='sm:hidden' />
        </button>
        <div>
            <img src={logo} className='w-28' />

        </div>

        <UserData />
        </div>
      <aside className={`absolute shadow-lg shadow-red-400 top-0 h-screen w-[45%] translate-x-[-100%] ${aside?"translate-x-[0%]":""} transition-all duration-700 ease-in-out bg-gray-100 shadow-sm`}>
      <button onClick={()=>setAside(false)}>
            
            <HiOutlineXCircle className='hover:text-red-400 transition-all ease-in-out duration-700 absolute top-[1%] right-[5%] text-slate-700 text-3xl'/>
            </button>
            <SideBar Aside={setAside}  />
      </aside>
    </div>
  )
}

export default Header
