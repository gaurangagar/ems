import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { setLocalStorage, getLocalStorage } from './utils/localStorage.jsx'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {
  
  const [user,setUser]=useState(null);
  const authData=useContext(AuthContext)

  const handleLogin=(email,password)=>{
    if(email=='admin@example.com' && password=='123'){
      setUser('admin')
    } else if(authData && authData.employees.find((e)=>email==e.email && password==e.password)) {
      setUser('employee')
    }
  }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : null}
    {user && (user=='admin' ? <AdminDashboard/> : <EmployeeDashboard/>)}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App