import React from 'react'
import Header from '../other/Header.jsx'
import TaskListNumbers from '../other/TaskListNumbers.jsx'
import TaskList from '../../TaskList/TaskList.jsx'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data}/>
        <TaskListNumbers data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard