import React, { useContext } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
import { AsideNavigationContext } from '../context/AsideNavigationContext'
import { categoriesData } from './CategoriesData'
import CategoriesPage from './CategoriesPage'
function Categories() {
    const navigation = useNavigate()
    const [navigate,setNavigate] = useContext(AsideNavigationContext)
  return (
    <main>
        <section className='mx-2 py-2'>
        </section>
        <div>
            <section>
                {
                    categoriesData.map((item)=>{
                        return (
                            <div key={item.name}>
                        
                                {
                                    navigate === item.name?<CategoriesPage Data={item.name} />:""
                                }
                                
                            </div>
                        )
                    })
                }
            </section>
        </div>
    </main>
  )
}

export default Categories
