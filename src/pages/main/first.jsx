import React, { useContext } from 'react'
import { products } from '../../productDatas/Datas'
import ProductCard from '../../components/ProductCard'
import { WishlistContext } from '../../context/WishlistContext';

function First() {
  return (
    <main className='overflow-y-scroll h-screen'>
      <div className='TopDeal/Ads overflow-y-scroll'>
        <h3>Top Deals</h3>
        <section className='TopDeal/Ads flex h-full  overflow-y-scroll  px-2 w-screen' >

       <div className='Card w-[90%] h-[160px] shrink-0  bg-slate-400 rounded-md mx-4 '></div>
        </section>
      
      </div>
      <div className='overflow-y-scroll flex flex-wrap justify-center mb-3'>
        {
          products.map((items)=><ProductCard key={Math.random()}  items={items}/>)
        }
      </div>
    </main>
    
  )
}

export default First
