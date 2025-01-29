import React from 'react'

const NewTask = ({task}) => {
  return (
    <div className=' flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
        <h4 className='text-small'>{task.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
    <p className='text-sm mt-2'>
        {task.description}
    </p>
    <div className='mt-4'>
    <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
    </div>
</div>
  )
}

export default NewTask