import React, { useContext, useState } from 'react'
import { categories } from '../productDatas/Datas'
import { Link, NavLink } from 'react-router-dom'
import { AsideNavigationContext } from '../context/AsideNavigationContext'

function SideBar({ Aside }) {

  const [navigate,setNavigate] = useContext(AsideNavigationContext)
  return (
    <div>

      {
        categories.map(item => {
          return (

            <div key={item.name}>
              
   
                <Link onClick={() => { Aside(false); setNavigate(item.name) }} to={`/categories/${item.name}`}>
                   
                    <div className='Aside flex w-[90%] py-3 transition-all ease-in-out duration-700 hover:text-teal-400 items-center my-3 hover:shadow-md ml-2'  >
                      <span className='mr-2 text-xl text-teal-300'>{item.icon}</span>
                      <p className='text-xs'>{item.name}</p>
                    </div>
                  </Link>



            </div>
          )
        }
        )


      }

    </div>
  )
}

export default SideBar
