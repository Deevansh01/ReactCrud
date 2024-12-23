import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styles from './update.module.css';

const UpdateProfile = () => {
    let userID = localStorage.getItem("userID");

    let [userDetails, setUserDetails] = useState(null);

    let navigate = useNavigate()

    useEffect(() => {
        async function fetchUser() {
            let { data } = await axios.get(`http://localhost:5000/users/${userID}`)
            console.log(data)
            setUserDetails(data);
        }
        fetchUser();
    }, []);

    let handleChange = (e) => {
        let { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value })
    }

    let updatedFormSubmit = (e) => {
        e.preventDefault()
        console.log("Updated Value", userDetails)
        axios.put(`http://localhost:5000/users/${userID}`,userDetails).then(()=>{
            toast.success("Profile Updated")
            navigate("/profile")
        }).catch(()=>{
            toast.error("Updated Failed")
        })
    }

    return (
        <div>
            <h1>Update Profile</h1>
            <form className={styles.form} onSubmit={updatedFormSubmit}>

                {/* Name Input */}
                <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        className={styles.input}
                        placeholder="Enter your name"
                        required
                        name="username"
                        value={userDetails?.username}
                        readOnly
                    />
                </div>

                {/* Email Input */}
                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        className={styles.input}
                        placeholder="Enter your email"
                        required
                        name="useremail"
                        value={userDetails?.useremail}
                        readOnly
                    />
                </div>

                {/* Password Input */}
                <div className={styles.inputGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input
                        type="password"
                        id="password"
                        className={styles.input}
                        placeholder="Enter your password"
                        required
                        name="userpassword"
                        value={userDetails?.userpassword}
                        onChange={handleChange}
                    />
                </div>

                {/* Phone Number Input */}
                <div className={styles.inputGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        className={styles.input}
                        placeholder="Enter your phone number"
                        required
                        name="userPhoneNo"
                        value={userDetails?.userPhoneNo}
                        onChange={handleChange}
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className={styles.button} onClick={updatedFormSubmit}>
                    Update
                </button>
            </form>
        </div>
    )
}

export default UpdateProfile