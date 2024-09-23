import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';

function Contact() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '0 0 20%', backgroundColor: '#fff' }}>
        <Sidenav />
      </div>
      <div style={{ flex: '1', padding: '20px', backgroundColor: '#fff' }}>
        <h1 className="page-header" style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff', fontWeight: 'bold' }}>
          Contact Us
        </h1>
        
        <h2 style={{ color: '#007bff', textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
          Get in Touch
        </h2>
        
        <Form style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Form.Group controlId="formName">
            <Form.Label style={{ color: '#007bff', fontWeight: 'bold' }}>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label style={{ color: '#007bff', fontWeight: 'bold' }}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label style={{ color: '#007bff', fontWeight: 'bold' }}>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Your message here..." />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form>

        <h2 style={{ color: '#007bff', textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', marginTop: '40px' }}>
          Contact Information
        </h2>
        
        {/* Contact Info Box */}
        <div style={{ 
          border: '1px solid #007bff', 
          padding: '20px', 
          marginTop: '20px', 
          borderRadius: '8px', 
          textAlign: 'center' 
        }}>
          <p style={{ color: '#007bff', fontWeight: 'bold' }}>Email: support@cric-kit.com</p>
          <p style={{ color: '#007bff', fontWeight: 'bold' }}>Phone: (123) 456-7890</p>
          <p style={{ color: '#007bff', fontWeight: 'bold' }}>Address: 123 Sports Lane, Sports City, SC 12345</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

