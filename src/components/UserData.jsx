import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

function UserData() {
  return (
    <div className=' flex flex-col items-center'>
        <FaUserCircle />
        <p className='text-xs'>

      User Name
        </p>
    </div>
  )
}

export default UserData
