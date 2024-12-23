import React,{useState} from 'react'
import axios from 'axios';
import toast from 'react-hot-toast'
import styles from'./register.module.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
  let [registerUser, setRegisterUser] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    userPhoneNo: "",
  });
  let navigate = useNavigate();

  let RegisterHandle = (e) => {
    let { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value })
  };

  let RegisterSubmit = (e) => {
    e.preventDefault() 
    console.log(registerUser)
    axios.post("http://localhost:5000/users", registerUser)
    .then(() => {
      toast("registered successfully")
      setRegisterUser({
        username: "",
        useremail: "",
        userpassword: "",
        userPhoneNo: "",
      })
      navigate("/login")
    })
    .catch(()=>{
      toast("not registered")
    })
  }
  return (
   <div id={styles.register}>
      <h1>Register page</h1>
        <form>
            <div> 
            <label>Name</label>
                <input
                type="text" 
                required placeholder='Enter Name' 
                name='username'
                onChange={RegisterHandle}
                value={registerUser.username}/>
            </div>
            <div>
            <label>Email</label>
                <input 
                type="email"
                required placeholder='Enter Email' 
                name='useremail'
                onChange={RegisterHandle}
                value={registerUser.useremail}/>
            </div>
            <div>
            <label>Password</label>
                <input 
                type="password" 
                required placeholder='Enter Your Password'
                name='userpassword'
                onChange={RegisterHandle}
                value={registerUser.userpassword} />
            </div>
            <div>
            <label>Phone No.</label>
                <input
                type="tel"
                min={10} 
                max={10}
                required placeholder='Enter Phone No.' 
                name='userPhoneNo'
                onChange={RegisterHandle}
                value={registerUser.userPhoneNo}/>
            </div>
            
            <div>
            <button onClick={RegisterSubmit}>Register</button>
            </div>
        </form> 
    </div>
  )
}
export default Register
