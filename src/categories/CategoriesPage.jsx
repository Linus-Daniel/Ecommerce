import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function CategoriesPage({Data}) {
  const All = useNavigate()
  useEffect(()=>{
    if (Data ==="All"){
      All("/")
    }
    else{
      <CategoriesPage />
    }
  },[])
  return (
    <main>
        {
          Data
        }
    </main>
  )
}

export default CategoriesPage
