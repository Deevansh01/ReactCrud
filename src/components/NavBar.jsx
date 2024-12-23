import React from 'react'
import style from "./NavBar.module.css"
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const NavBar = () => {
  let userID = localStorage.getItem("userID")
  console.log(userID);

  let navigate = useNavigate()

  let logout = () => {
    localStorage.removeItem("userID")
    navigate("/login")
  }
  let deleteProfile = () => {
    let confirmationVal = confirm("Are you sure?")
    console.log(confirmationVal);
    if(confirmationVal){
      axios.delete(`http://localhost:5000/users/${userID}`)
    .then(() => {
      toast.success("Account Deleted")
      localStorage.removeItem("userID")
      navigate("/register")
    })
    .catch(() => {
      toast.error("Something went wrong")
    })
    }
  }
  
  return (
    <nav className={style.navbar}>
      <aside className={style.logo}>logo</aside>
      <ul className={style.navlinks}>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        {userID?(
        <>
            <li className={style.drop}>
            <Link to="/profile">Profile</Link>
            <ul className={style.dropdown}>
              <li><Link to="/updateprofile">Update</Link></li>
              <li onClick={deleteProfile}>Delete</li>
            </ul>
            </li>
            <li onClick={logout}>
              Logout
            </li>
        </>):
        (
          <>
          <li>
          <Link to="/register">register</Link>
        </li>
        <li>
          <Link to="/login">login</Link>  
        </li>
          </>
        )}
      </ul>
    </nav>
  )
}
export default NavBar
