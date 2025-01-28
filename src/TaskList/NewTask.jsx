import React from 'react'

const NewTask = () => {
  return (
    <div className=' flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-small'>20 Feb 2024</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Make a yt video</h2>
    <p className='text-sm mt-2'>
        Lorem ipsum provident repellendus autem. Minus recusandae dolor commodi ipsa?
    </p>
    <div className='mt-4'>
        <button>Accept Task</button>
    </div>
</div>
  )
}

export default NewTask