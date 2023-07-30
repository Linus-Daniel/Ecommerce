import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Banks } from '../components/constants'
import InfoCard from './components/InfoCard'
let loader = null
function LocalBank() {
    useEffect(() => {
        const loader = setInterval(() => {
            console.log("me love my self")
        }, 5000);
        return (
            clearTimeout(loader)
        )
    })
    const [bank, setBank] = useState("")
    const [product, setProduct] = useContext(ProductContext)
    console.log(bank)
    return (
        <div className='mx-5 mt-10 h-screen  overflow-y-scroll mb-28'>
            <div  className=' overflow-y-scroll mb-28 '>


                <section>
                    <select className='px-2 py-3 rounded-md mb-8' onChange={(event) => { setBank(event.target.value) }}>
                        {
                            Banks.map((bank) => {
                                return (

                                    <option key={bank.name}>
                                        {bank.name}
                                    </option>

                                )
                            })
                        }
                    </select>
                </section>
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
                <div className={`mb-10`}>
                    {
                        Banks.map(banks => <InfoCard key={banks.name} bankInfo={banks} chosenBank={bank} />)
                    }
                </div>
                <button type='submit' onClick={(e) => { if (confirm("Do you want to proceed?") === true) { console.log("hi") } else { e.preventDefault() }; }} className='text-lg rounded-md bg-black mt-5 text-white mb-28 w-full py-3'>I have made Transaction</button>

            </div>
        </div>
    )
}

export default LocalBank
