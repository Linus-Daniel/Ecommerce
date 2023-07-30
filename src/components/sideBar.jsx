import React from 'react'
import { categories } from '../productDatas/Datas'
import { Link, NavLink } from 'react-router-dom'

function SideBar({Aside}) {
  return (
    <div>

        {
            categories.map(item=><div key={item.name}><NavLink onClick={()=>{Aside(false)}}to={"/"}><div  className='Aside flex w-[90%] py-3 transition-all ease-in-out duration-700 hover:text-red-400 items-center my-3 hover:shadow-md ml-2'  ><span className='mr-2 text-xl'>{item.icon}</span><p className='text-xs'>{item.name}</p></div></NavLink></div>)
        }
      
    </div>
  )
}

export default SideBar
