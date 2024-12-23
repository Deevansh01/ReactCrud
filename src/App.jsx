import React from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import Profile from './pages/Profile'
import PrivateRoutes from './components/PrivateRoutes'
import UpdateProfile from './pages/UpdateProfile'
import Admin from './pages/Admin'
import AdminUpdate from './pages/AdminUpdate'
const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Toaster/>
       <NavBar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route 
         path='/profile' 
         element={
         <PrivateRoutes>
            <Profile/>
         </PrivateRoutes>}/>


         <Route 
         path='/updateprofile' 
         element={
         <PrivateRoutes>
            <UpdateProfile/>
         </PrivateRoutes>}
         />

         <Route 
         path='/admin' 
         element={
         <PrivateRoutes>
            <Admin/>
         </PrivateRoutes>}
         />

         <Route 
         path='/adminupdate/:id' 
         element={
         <PrivateRoutes>
            <AdminUpdate/>
         </PrivateRoutes>}
         />

       </Routes>
       </BrowserRouter>
    </div>
  )
}
export default App
