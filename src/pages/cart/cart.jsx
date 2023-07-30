import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { HiOutlineTrash, HiTrash } from 'react-icons/hi'

function Cart() {
  const [cart,setCart] = useContext(CartContext)
  return (
    <div>
      <div>
        <img src={cart.image} className='w-28 h-28 ' />
        <p>{cart.name}</p>
        <p>{cart.price}</p>
      </div>
      <div>
        <HiOutlineTrash />
      </div>
    </div>
  )
}

export default Cart
