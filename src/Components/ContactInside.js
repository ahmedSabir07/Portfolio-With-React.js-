import './Contact.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2'


function ContactInside({ heading, text }) {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6683ea0b-f2a6-47eb-b8ac-e2876baba33d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success"
      });    
      event.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
        setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <section id="contact" className="contact">
        <h2>{heading}</h2>
        <h4>{text}</h4>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" >Send Message</button>
        </form>
        <p>{result}</p>
      </section>
    </div>
  );
}

export default ContactInside;
