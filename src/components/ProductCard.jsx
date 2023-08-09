import React, { useContext, useEffect, useState } from 'react'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'
import { ProductContext, ProductProvider } from '../context/ProductContext'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../context/WishlistContext'
import { CartData } from '../productDatas/CartDatas'
function ProductCard({ items, handleClick }) {
  const [product,setproduct] = useContext(ProductContext)
  const [id,setId] = useContext(WishlistContext)
  const [favorite,setFavorite] = useState(false)
  const [wish,setWish]=useContext(WishlistContext)

  useEffect(()=>{
    
   console.log("hi")
   if (favorite===true){
    console.log("True")
    // setWish(wish.push(items))
    console.log(wish.length)
   }
  },[favorite])
  return (
    
    <div className='bg-slate-200 mx-1 flex flex-col justify-between mt-2 px-3 py-5 rounded-md'>
      
      <section className='w-[100px] '>
        <Link to={"/productview"} className='w-full'>
        <img src={items.image} alt='productImage' onClick={()=>{setproduct(items)}}/>
        </Link>
      </section>
      <section className='flex justify-between text-sm items-center'>
        <div className=''>

          <p className='text-sm font-bold'>{items.name}</p>
          <p className='text-xs'>{items.price}</p>
        </div>
          <div className='flex flex-col  items-center'>
          <button onClick={()=>{setId(items.id);setFavorite(prev=>!prev)}} className='bg-red-300 h-7 w-7 rounded-md flex items-center justify-center text-2xl'>
            {
              favorite ? <HiHeart className='text-red-600' /> : <HiOutlineHeart color='red' />
            }
            
       
          </button>
            <p className='line-through text-xs text-gray-400'>Discount</p>
          </div>
      </section>
    </div>
  )
}

export default ProductCard
