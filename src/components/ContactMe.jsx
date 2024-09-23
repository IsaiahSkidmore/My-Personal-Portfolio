import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function ContactMe() {
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <section className='contact'>
      <Form>
        <div className="contact-container">
          <Form.Group className="mb-3 contact-form" controlId="Full Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="input" placeholder="Full Name" onBlur={() => setNameTouched(true)} />
            {nameTouched && <div className="error">This field is required</div>}
          </Form.Group>
        </div>
        <div className="contact-container">
          <Form.Group className="mb-3 contact-form" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" 
              onBlur={() => setEmailTouched(true)} 
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailTouched && !validateEmail(email) && <div className="error">Please enter a valid email</div>}
          </Form.Group>
        </div>
        <div className="contact-container">
          <Form.Group className="mb-3 contact-form" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" placeholder="Message" rows={3} onBlur={() => setMessageTouched(true)} />
            {messageTouched && <div className="error">This field is required</div>}
          </Form.Group>
        </div>
      </Form>
    </section>
  );
}

export default ContactMe;