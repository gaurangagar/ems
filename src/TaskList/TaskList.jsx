import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist'className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 w-full py-5 mt-10'>
        {data.tasks.map((e,idx)=>{
            if(e.active) {
                return <AcceptTask task={e} key={idx}/>
            }
            if(e.new) {
                return <NewTask task={e} key={idx}/>
            }
            if(e.failed) {
                return <FailedTask task={e} key={idx}/>
            }
            if(e.completed) {
                return <CompleteTask task={e} key={idx}/>
            }
        })}
    </div>
  )
}

export default TaskList