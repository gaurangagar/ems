import React from 'react'
import Header from '../other/Header.jsx'
import CreateTask from '../other/CreateTask.jsx'
import AllTask from '../other/AllTask.jsx'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-7'>
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
