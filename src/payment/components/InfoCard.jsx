import React from 'react'

function InfoCard({bankInfo,chosenBank}) {
    console.log(bankInfo.name,chosenBank)
  return (
    <div className={` bg-slate-200 px-5 py-3 rounded-md ${chosenBank===bankInfo.name?"block text-sm mb-10":"hidden"}`}>

        <p>Goto you bank app and Make this Transaction to:</p>
        <div>

        <p className='text-lg font-bold my-1'>{bankInfo.name}</p>
        <p className=' my-1'>{bankInfo.accountName}</p>
        <p className=' my-1'>{bankInfo.accountNumber}</p>
        </div>
        <div>
            <p className='my-1'>Or you can dial the USSD code for the transaction</p>
            <p className=' my-1'>{bankInfo.UssdCode}</p>
        </div>

      
    </div>
  )
}

export default InfoCard
