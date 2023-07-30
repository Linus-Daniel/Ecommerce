import React, { useState } from 'react'
import DebitCard from './DebitCard'
import LocalBank from './LocalBank'

function Payment() {
  const [paymentMethod,setPaymentMethod] = useState()
  const [mine,setMine] =  useState()
  switch (paymentMethod){
    case "Debit Card":{
      ()=> setMine("Ilove you")
    }
  }
  return (
    <div>
      <select name='Payment methods' className=' mx-[20px] w-[80%] text-sm p-2' onClick={(event)=>setPaymentMethod(event.target.value)}>
        <option className='text-gray-400 shadow-md'>Payment Methods</option>
        <option className='text-red-300'>Local Bank transfer</option>
        <option>Crypto</option>
        <option>Debit Card</option>
        <></>

      </select>
      <div>

      {
        paymentMethod==="Debit Card"?<DebitCard />:""
      }
      {
        paymentMethod ==="Local Bank transfer"?<LocalBank />:""
      }
      </div>
    </div>
  )
}

export default Payment
