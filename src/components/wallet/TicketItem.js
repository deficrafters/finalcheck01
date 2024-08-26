import React from 'react'

const TicketItem = ({
    amount,
    rate,
    icon,
    btnGroup }) => {
    return (
        <div className='flex justify-between flex-col gap-2 lg:flex-row w-full bg-[#353535] p-3 mb-4 rounded-lg'>
            <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center gap-2'>
                {icon}
                <p>{amount}</p>
                <p className='text-sm text-gray-500'>${rate}</p>
                </div>

            </div>
            <div className='flex items-center justify-around gap-3'>
                {btnGroup}
            </div>
        </div>
    )
}

export default TicketItem