import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {
  const [user,setUser]=useState(null);
  const [loggedinUserdata, setLoggedinUserdata] = useState(null)
  const authData=useContext(AuthContext)

useEffect(()=>{
  const loggedinUser=localStorage.getItem('loggedInUser')
  if(loggedinUser) {
    const userData=JSON.parse(loggedinUser)
    setUser(userData.role)
    setLoggedinUserdata(userData.data)
  }
},[])

  const handleLogin=(email,password)=>{
    if(email=='admin@example.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if(authData) {
      const employee=authData.employees && authData.employees.find((e)=>e.email==email && password==e.password)
      if(employee) {
        setUser('employee')
        setLoggedinUserdata(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
      
    } else alert('Invalid credentials')
  }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : null}
    {user && (user=='employee' ? <EmployeeDashboard data={loggedinUserdata}/> : (user=='admin' ? <AdminDashboard data={loggedinUserdata}/> : null))}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App