import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const AdminUpdate = () => {

    //fetching dynamic id from URL
    let {id} = useParams()
    console.log(id);
    
    let [updateUser, setUpdateUser ] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {
        async function fetchUpdateUser(){
            let {data} = await axios.get(`http://localhost:5000/users/${id}`)
            console.log("Data",data);
            setUpdateUser(data)//storing in state
        }
        fetchUpdateUser()
    },[])

    let handleChange = (e) => {
        let {name,value} = e.target
        setUpdateUser({...updateUser,[name]:value})
    }
    let formSubmit = (e) => {
        e.preventDefault()
        console.log(updateUser);
        axios.put(`http://localhost:5000/users/${id}`,updateUser).then(() => {
            toast.success("User Updated")
            navigate("/admin")
        }) 
        .catch(() => {
            toast.error("Not updated")
            console.log("Not Updated");
        })
    }
    return (
        <div>
           <h1>Admin Update</h1>
             <form onSubmit={formSubmit}>
                 <div> 
                 <label>Name</label>
                     <input
                     type="text" 
                     required placeholder='Enter Name' 
                     name='username'
                     value={updateUser?.username}
                     onChange={handleChange}
                     />
                 </div>
                 <div>
                 <label>Email</label>
                     <input 
                     type="email"
                     required placeholder='Enter Email' 
                     name='useremail'
                     value={updateUser?.useremail}
                     onChange={handleChange}/>
                 </div>
                 <div>
                 <label>Password</label>
                     <input 
                     type="password" 
                     required placeholder='Enter Your Password'
                     name='userpassword'
                     value={updateUser?.userpassword}
                     onChange={handleChange} />
                 </div>
                 <div>
                 <label>Phone No.</label>
                     <input
                     type="tel"
                     min={10} 
                     max={10}
                     required placeholder='Enter Phone No.' 
                     name='userPhoneNo'
                     value={updateUser?.userPhoneNo}
                     onChange={handleChange}/>
                 </div>
                 <div>
                 <button>Update</button>
                 </div>
             </form> 
         </div>
       )
}

export default AdminUpdate
