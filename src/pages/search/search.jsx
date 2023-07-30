import React, { useState } from 'react'
import { HiMicrophone, HiSearch } from 'react-icons/hi'
import Voice from './component/Voice';

function Search() {
  const [search, setSearch] = useState();
  const [searchValue, setSearchValue] = useState()
  const [visible, setVisible] = useState(false)
  const [microphone,setMicrophone] = useState(false)
  return (
    <div className='mt-5'>
      <div className='flex searchBar text-slate-500 items-center px-4 py-2 bg-gray-300   justify-center w mx-8 rounded-md '>
        <button onClick={() => { setSearch(searchValue); setVisible(true) }}>
          <HiSearch />

        </button>
        <input placeholder='Search product' onChange={(event) => setSearchValue(event.target.value)} className='flex-1 bg-transparent outline-none text-gray-800 ml-2' />
        <button onClick={ ()=>setMicrophone(true)}>

        <HiMicrophone />
        </button>
      </div>
      <section className='mt-2'>
        {


         visible? <h3 className='flex'>

            <p className='text-slate-600'>Search Results For: </p> <span className='ml-3 font-bold text-md'>
              {
                search
              }
            </span>

          </h3>:""
        }
      </section>
      <div>
        {
          microphone?<Voice microphone={setMicrophone}/>:""
        }
      </div>
      <section>

      </section>
    </div>
  )
}

export default Search
