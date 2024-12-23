import React from 'react'
import style from './about.module.css' 

const About = () => {
  return (
    <div className={style.aboutcontainer}>
      <h1>About Page</h1>
       <img src="https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU=
            " alt="Our Team"/>
            <p>Welcome to our website! We are a team of passionate individuals committed to delivering the best services to our customers. Our mission is to bring innovation and excellence in everything we do.</p>
            <p>Feel free to reach out to us for any inquiries or collaborations. Together, let's create something amazing!</p>
    <footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
    </div>
    
  )
}

export default About
