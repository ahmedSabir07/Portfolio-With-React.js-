import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ContactInside from '../Components/ContactInside'
function Contact() {
  return (
    <div>
      <NavBar/>
      <ContactInside heading='CONTACT US' text='Let us know why you’re reaching out, and we’ll get back to you shortly.' />
      <Footer/>
    </div>
  )
}

export default Contact
