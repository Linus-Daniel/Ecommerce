import React, { useContext, useEffect } from 'react'
import { products } from '../../productDatas/Datas'
import ProductCard from '../../components/ProductCard'
import { WishlistContext } from '../../context/WishlistContext';

function First() {
   useEffect(()=> {
const slider = document.querySelector("#slider");
const sliderEls = document.querySelectorAll("#slider > .Card");
const sliderEl = sliderEls[0];

for (let i in sliderEls) {

  setTimeout(() => {
    slider.scrollTo({left: Math.floor( sliderEl.clientWidth * i)});
  }, 1800 * i);
  
}
  },[])
  return (
    <main className='overflow-y-scroll h-screen'>
      <div className='TopDeal/Ads overflow-y-scroll my-3'>
        <h3 className='ml-5 py-4 font-semibold text-teal-500'>Top Deals</h3>
        <section id={"slider"} className='TopDeal/Ads transition-all ease-in-out duration-700 animate-slideleft flex h-fit overflow-x-hidden  px-2 w-full' >
{products.map((i,idx)=> {
  return (
    <div key={idx} className='Card  w-full h-[160px] shrink-0  bg-white/20 text-3xl place-item-center rounded-md shadow-md'><div className=' flex items-center justify-center'><img src={i.image}  className='w-[100px] h-[100px]' /></div></div>

  )
})}
        </section>
      
      </div>
      <section className='px-2'>
      <p className='text-lg font-bold text-teal-500'>For you </p>
      <div className='overflow-y-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
        
        {
          products.map((items)=><ProductCard key={Math.random()}  items={items}/>)
        }
      </div>
        </section>
    </main>
    
  )
}

export default First
