import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function DebitCard() {
    const [product,setProduct] = useContext(ProductContext)
  return (
    <main className='overflow-y-scroll h-full '>

    <div className='overflow-y-scroll h-full mb-14'>
      <select className='mb-10 mx-5 rounded-md px-1 py-2 my-5'>
        <option>Card Type</option>
        <option>Maseter Card</option>
        <option>Verse Card</option>
        <option>Visa Card</option>
      </select>
      <div>
        <form className='mx-4 p-5 bg-slate-100 w-[90%] mb-14'>
            <input  className='px-2 py-3 m-1 w-[90%] rounded-lg bg-' placeholder='Enter card Number' type='number' />
            <div className='flex w-[50%] justify-between'>
                <input className='px-2 py-3 m-1 w-[90%] rounded-lg bg-' placeholder='Enter First 6 digits' type='number' />
                <input className='px-2 py-3 m-1 w-[90%] rounded-lg bg-' placeholder='Enter Last 4 digits' type='number' />

            </div>
            <div>
                <input className='px-2 py-3 m-1 w-[90%] rounded-lg bg-' placeholder='CVV' type='number' maxLength={5} />
                <input className='px-2 py-3 m-1 w-[90%] rounded-lg bg-' placeholder='Expiry' type='date' />
            </div>
            <div>
                <p>Payment For </p>
                <div className='flex px-2 my-3  text-sm justify-between '>
                    <div>
                    <img src={product.image} className='h-16 w-16' />
                    <p>{product.name}</p>
                    <p>{product.price}</p>

                    </div>
                    <div>

                    <p>
                        close Deliver According to location:

                    </p>
                    <p className='text-red-500'>
                    
                        Wunti Market Bauchi state
                    </p>
                    <button type='button' className='border-[1px] text-green-400 border-solid shadow-md px-1 py-2'>
                        <select>
                            <option>Change Delivery Location</option>
                            <option>
                                Tudun wada jos
                            </option>
                            <option>
                                Rayfiend Jos
                            </option>
                            <option>
                                Rafin zurfi Bauchi
                            </option>
                            <option>
                                Zaramagand jos
                            </option>
                        </select>
                    </button>
                    </div>
                </div>

            </div>
            <button type='submit' onClick={(e)=>{if(confirm("Do you want to proceed?")===true){console.log("hi")}else{e.preventDefault()};}} className='text-lg rounded-md bg-black text-white mb-10 w-full py-3'>Make Payment</button>
        </form>
      </div>
        
    </div>
    </main>
  )
}

export default DebitCard
