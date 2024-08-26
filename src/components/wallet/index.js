import Image from 'next/image'
import React from 'react'

const WalletItem = ({
    amount,
    rate,
    canImport,
    icon,
    btnGroup }) => {
    return (
        <div  className='flex justify-between flex-col gap-2 lg:flex-row w-full bg-[#1d1f58] p-3 mb-4 rounded-lg'>
            <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center gap-2'>
                
                {/* {icon} */}

                <Image src={icon} width={20} height={20} />
                <p>{amount}</p>
                <p className='text-sm text-gray-500'>${rate}</p>
                </div>
                {/* {canImport && <button className='cancel'>import token</button>} */}
            </div>
            <div className='flex items-center justify-around gap-3'>
                {btnGroup}
            </div>
        </div>
    )
}

export default WalletItem