import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Profile = () => {
  let userID = localStorage.getItem("userID")

  let [profileUser,setProfileUser] = useState(null)
  let [APIUsers,setAPIUsers]  = useState(null)
  

    useEffect(() => {
      async function fetchAuthUser(){
        //fetching individual user dynamically::
        let {data} = await axios.get(`http://localhost:5000/users/${userID}`)
        console.log(data);
        setProfileUser(data)
      }
      fetchAuthUser()
    },[])

    useEffect(() => {
      async function fetchAPIUser(){
        let {data} = await axios.get("https://api.github.com/users")
        console.log(data);
        setAPIUsers(data)
      } 
      fetchAPIUser()
    },[])

  return (
    <div>
      <h1>Welcome {profileUser?.username}</h1>
      {
        APIUsers?.map((user) => {
          let {login,avatar_url,html_url,type,id} = user
          return(
            <section key={id}>
             <h1>{login}</h1>
             <img src={avatar_url} height={200} width={200}/>
             <p>
              <a href={html_url}>view more</a>
             </p>
             <h3>{type}</h3>
            </section>
          )
        })
      }
    </div>
  )
}
export default Profile
