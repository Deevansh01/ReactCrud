import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    let [allUsers, setAllUsers] = useState(null)
    useEffect(() => {
       async function fetchAllRegisteredUsers(){
            let {data} =await axios.get("http://localhost:5000/users")
            console.log(data);
            setAllUsers(data);
        }
        fetchAllRegisteredUsers();
    },[])
  return (
    <div>
      <h1>Admin Panel</h1>
      {allUsers?.filter(user => user.username !=="admin")
      .map(({id,username,useremail,userpassword,userPhoneNo}) => {
        return(
            <section key={id}>
                <h1>Name : {username}</h1>
                <p>Email : {useremail}</p>
                <p>Password : {userpassword}</p>
                <p>Phone No : {userPhoneNo}</p>
                <button><Link to={`/adminupdate/${id}`}>update</Link></button>
                <button>delete</button>
            </section>
        )
      })
      }
    </div>
  )
}

export default Admin
