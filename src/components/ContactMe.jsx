// import { Col, Container, Row } from "react-bootstrap";
// import React, { useState } from "react";

// export const ContactMe = () => {
//     const formInitialDetails = {
//         name: '',
//         email: '',
//         message: ''
//     }

//     const [formDetails, setFormDetails] = useState(formInitialDetails);

//     const [buttonText, setButtonText] = useState('Send');
//     const [status, setStatus] = useState({});
//     const onFormUpdate = (category, value) => {
//         setFormDetails({ 
//             ...formDetails, 
//             [category]: value 
//         });
//     }

//     const handleSumit = () => {

//     }


//     return(
//         <section className="contact" id="connect">
//             <Container>
//                 <Row className="align-items-center">
//                     <Col md={6}>
//                         <img src="https://via.placeholder.com/600" alt="Contact Us" />
//                     </Col>
//                     <Col md={6}>
//                         <h2>Get In Touch</h2>
//                         <form onSubmit={handleSumit}>
//                             <Row>
//                                 <col md={6} className="px-1">
//                                     <input type="text" value={formDetails} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
//                                 </col>
//                                 <col md={6} className="px-1">
//                                 <input type="email" value={formDetails} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
//                                 </col>
//                                 <Col>
//                                     <textarea row="6" value={formDetails} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
//                                     <button type="submit">
//                                         <span>
//                                             {buttonText}
//                                         </span>
//                                     </button>
//                                 </Col>
//                                 {
//                                     status.message && 
//                                     <Col>
//                                         <p className={status.success === false ? "danger": "success"}>
//                                             {status.message}
//                                         </p>
//                                     </Col>
//                                 }
//                             </Row>
//                         </form>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     )
// }

// export default ContactMe;


import Form from 'react-bootstrap/Form';

function ContactMe() {
  return (
    <Form>
        <div className="contact-container">
        <Form.Group className="mb-3 contact-form" controlId="Full Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      </div>
      <div className="contact-container">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      </div>
        <div className="contact-container">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </div>
      
    </Form>
  );
}

export default ContactMe;