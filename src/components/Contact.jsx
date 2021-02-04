import React, { useState } from "react";
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = 'block';
      mail.style.animation = 'dongle 1s';
      setTimeout(() => {
        mail.style.animation = "none";
      }, 1000);
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name && isEmail() && message) {
    sendFeedback("template_fxa1fzf", {
      name,
      email,
      message,
    });
  } else {
    console.log("Error")
  }
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("service_ag2e3zf", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez rÃ©essayer.")
  };

  return (
    <form style={{color: "white", borderRadius: "60px", marginBottom: "20px"}} className="contact-form">
      <h2 style={{color: "black"}}>CONTACT US</h2>
      <div className="form-content">
        <input 
          style={{borderRadius: "5px", marginBottom: "20px"}}
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <div className="email-content">
          <label id="not-mail">Invalid email</label>
          <input
            style={{borderRadius: "5px", marginBottom: "20px"}}
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          style={{borderRadius: "5px", marginBottom: "10px"}}
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Send"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
    </form>
  );
};

export default Contact;

