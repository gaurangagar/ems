import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data)
  return (
    <div id='tasklist'className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 w-full py-5 mt-10'>
        {data.tasks.map((e,idx)=>{
            if(e.active) {
                return <AcceptTask key={idx}/>
            }
            if(e.new) {
                return <NewTask key={idx}/>
            }
            if(e.failed) {
                return <FailedTask key={idx}/>
            }
            if(e.completed) {
                return <CompleteTask key={idx}/>
            }
        })}
    </div>
  )
}

export default TaskList