import React from 'react'

function Loader() {
  return (
    <main className='bg-black/80 flex items-center justify-center flex-col h-full w-full'>
        <div className='h-36 mb-10 animate-spin flex items-center justify-center w-36 rounded-full bg-gradient-to-br from-slate-300 to-gray-600 '>
            <div className='  flex justify-center items-center  rounded-full h-[80%] w-[80%] bg-gray-900'>
                    
            </div>
            
        </div>
        <p className='text-xl text-slate-400'>
                Please wait ...
            </p>
    </main>
  )
}

export default Loader
