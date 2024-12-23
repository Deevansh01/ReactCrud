import React, { useState,useEffect } from 'react'
import styles from './login.module.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let [loginUser, setLoginUser] = useState({
    useremail:"",
    userpassword:"",
  })

  let [allRegisteredUser,setAllregisteredUser] = useState(null) 

  let navigate = useNavigate()

  let handleLoginUser = (e) => {
    let {name, value} = e.target;
    setLoginUser({ ...loginUser, [name]:value})
  }
  //fetching registered user
  useEffect(() => {
    async function fetchRegisteredUser(){
      let {data} = await axios.get("http://localhost:5000/users")
      setAllregisteredUser(data)
      console.log(data);
      
    }
    fetchRegisteredUser()
  },[])

  let loginSubmit = (e) => {
    e.preventDefault()
    let authUser = allRegisteredUser.find((user) => {
      return(
        user.useremail === loginUser.useremail &&
        user.userpassword === loginUser.userpassword
      )
    })
    console.log(authUser);
    if(authUser.useremail === "admin@gmail.com" && authUser.userpassword === "admin123" )
    {
      toast.success(`Welcome ${authUser.username}`)
      localStorage.setItem("userID",authUser.id)
      navigate("/admin")
    }else if(authUser){
      //toast.success("*...WELCOME...*")
      toast.success(`*..Welcome ${authUser.username}..*`)
      localStorage.setItem("userID",authUser.id)
      navigate('/profile')
    }else{
      toast.error("Access denied..!!!")
    }
    
  }
  return (
    <div id={styles.Login}>
      <h1>Login page</h1>
        <form >
          <div>
          <label>Email</label>
                <input 
                type="email"
                 required placeholder='Enter Email' 
                 name='useremail'
                 onChange={handleLoginUser}
                 value={loginUser.useremail}/>
          </div>

          <div>
            <label>Password</label>
                <input 
                type="password" 
                required placeholder='Enter Your Password'
                name='userpassword'
                onChange={handleLoginUser}
                value={loginUser.userpassword} />
          </div>
         <div>
            <button onClick={loginSubmit}>Login</button>
         </div>
        </form>
                
    </div>
  )
}

export default Login
