
import Form from 'react-bootstrap/Form';

function ContactMe() {
  return (
    <section className='contact'>
    <Form>
        <div className="contact-container">
        <Form.Group className="mb-3 contact-form" controlId="Full Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="input" placeholder="Full Name" />
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
        <Form.Control as="textarea" placeholder="Message" rows={3} />
      </Form.Group>
      </div>
      
    </Form>
    </section>
  );
}

export default ContactMe;