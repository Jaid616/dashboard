import React, { createContext, useReducer } from 'react'
import Contact from './components/Contact'
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Error from './components/Error'
import { initialState, reducer } from './reducer/UseReducer'
import Logout from './components/Logout'

export const UserContext = createContext()


const App=()=> {
  
  const[state, dispatch] = useReducer(reducer,initialState)
  return (
    <>
    <UserContext.Provider value={{state , dispatch}}>

   <Navbar/>
      <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/login' element ={ state ? <Dashboard/> :<Login/>} />
      <Route path='/registration' element ={state? <Dashboard/>: <Signup/>} />
      <Route path='/contact' element ={<Contact/>} />
      <Route path='/dashboard' element ={<Dashboard/>} />
      <Route path='/logout' element ={<Logout/>} />
      <Route path='*' element ={<Error/>} />

      </Routes>
   <Footer/>
    </UserContext.Provider>
    </>
  )
}
export default App
