import React, { useContext, useState } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';
import Loader from './components/loader';
import Payment from '../../payment/Payment';
import { Link } from 'react-router-dom';

function ProductView() {
  const [product, setProduct] = useContext(ProductContext);
  const [pay, setPay] = useState(false)
  const [count,setCount] =useState(0)
  const [cart,setCart] = useContext(CartContext)
  const [wish,setWish]= useContext(WishlistContext)

  return (
    <main className='h-screen hide-scrollbar overflow-y-scroll'>

    <div className='w-screen overflow-y-scroll mb-20 h-screen'>
      
      <section className='flex justify-center'>
        <img src={product.image} className='w-[250px] h-[270px]' />
      </section>
      <div className='flex justify-between mb-8 px-10 mt-9'>

        <div>
          <p className='font-semibold text-lg'>{product.name}</p>
          <p className='text-sm'>{product.price}</p>

        </div>
        <div>
          <button onClick={() => {setWish(prev => !prev);}} className={` h-10 w-10 rounded-md flex items-center justify-center text-3xl`}>
            {
              wish ? <HiHeart className='text-red-600' /> : <HiOutlineHeart color='red' />
            }
          </button>
        </div>
      </div>
      <div className='text-sm text-slate-600'>
        <p >
          {product.description}
        </p>
        <p >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At facilis ad, soluta dolor vitae tenetur aliquid iusto obcaecati
          sunt sapiente voluptate nam
          ex enim harum. Perferendis rerum repellendus et quibusdam!</p>

      </div>

      <div className='text-sm mt-5 w-full flex justify-between px-4'>
        <div className='Counter w-[20%] items-center justify-between flex'>
            <button onClick={()=>setCount(prev=>prev-1)} className={`${count == 0?"text-slate-500":""}`} ><FaMinus /></button>
            <p>{count}</p>
            <button onClick={()=>setCount(prev=> prev+1)}><FaPlus /></button>
        </div>
        <div className='w-[70%] flex justify-between'>

        <Link to={'/payment'} onClick={()=>setPay(true)} className='Order bg-black text-white rounded-md px-3  hover:bg-white border-solid border-black border-[2px] hover:text-black transition-all ease-in-out duration-700 py-1 '>Place Order</Link>
        <button onClick={()=>{setCart(cart.push(product)); console.log(cart)}} className='add border-black border-solid border-[2px] hover:bg-black hover:text-white transition-all ease-in-out duration-700 px-3 py-1 rounded-lg'>
          Add to cart
        </button>
        </div>
            <div className='absolute w-full top-0'>
          

            </div>
      </div>
    </div>
    </main>
  )
}

export default ProductView
