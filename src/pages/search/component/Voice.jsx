import React from 'react'
import { HiMicrophone, HiOutlineXCircle } from 'react-icons/hi'
function Voice({microphone}) {
  return (
    <div className='absolute top-0 w-screen h-screen bg-black/60'>
      <section className='flex justify-center items-center w-full h-full'>
        <button onClick={()=>microphone(false)}>
            
        <HiOutlineXCircle className='hover:text-red-400 transition-all ease-in-out duration-700 absolute top-[30%] right-[25%] text-slate-700 text-3xl'/>
        </button>
        <div className='rounded-3xl flex items-center justify-center  bg-white w-[70%] h-[50%]'>
            <div>
            <HiMicrophone size={100} className='animate-pulse text-slate-400' />
            <p>
                Listening ...
            </p>

            </div>

        </div>
      </section>
    </div>
  )
}

export default Voice
