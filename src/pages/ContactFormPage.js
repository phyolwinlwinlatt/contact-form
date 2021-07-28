import React, {  useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import Layout from '../commons/Layout';
import classes from '../scss/Form.module.scss';
import { useHistory } from 'react-router-dom';
function ContactFormPage(props) {
   const history =  useHistory();
   const [name, setName] = useState(history.state.name || '');
   const [email, setEmail] = useState(history.state.email || '');
   const [phone, setPhone] = useState(history.state.phone || '');
   const [subject, setSubject] = useState(history.state.subject || '');
   const [message, setMessage] = useState(history.state.message || '');
   function handleSubmit(e) {
      e.preventDefault();

      history.push({
         pathname: '/preview',
         state: {
         name,
         email,
         phone,
         subject,
         message,
         }
      })
      console.log({ name, email, phone, subject, message });
   }

   return (
      <Layout>
         <Form onSubmit={handleSubmit} className={classes.form}>
            <Form.Group>
               <Form.Label>Name</Form.Label>
               <Form.Control
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='form-control-sm'
               />
            </Form.Group>
            <Form.Group>
               <Form.Label>Email</Form.Label>
               <Form.Control
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='name@test.com'
                  className='form-control-sm'
               />
            </Form.Group>
            <Form.Group>
               <Form.Label>Phone</Form.Label>
               <Form.Control
                  type='text'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='09'
                  className='form-control-sm'
               />
            </Form.Group>
            <Form.Group>
               <Form.Label>Subject</Form.Label>
               <Form.Control
                  type='text'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className='form-control-sm'
               />
            </Form.Group>
            <Form.Group>
               <Form.Label>Message</Form.Label>
               <Form.Control
                  as='textarea'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='form-control-sm'
               />
            </Form.Group>
            <div className={classes.button} style={{ textAlign: 'center' }}>
               <Button
                  type='submit'
                  variant='primary'
                  block
               >
                  Submit
               </Button>
            </div>
         </Form>
         <div className={classes.contactInformation}>
            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Contact Information</h3>
            <Row>
               <Col sm={2}>
                  <h6>location</h6>
               </Col>
               <Col>
                  <p>  No.12, California, United States of America</p>
               </Col>
            </Row>
            <Row>
               <Col sm={2}>
                  <h6>phone</h6>
               </Col>
               <Col>
                  <p> +196-345-445-44</p>
               </Col>
            </Row>
            <Row>
               <Col sm={2}>
                  <h6>email</h6>
               </Col>
               <Col>
                  <p>hello@california.com</p>
               </Col>
            </Row>
         </div>
      </Layout>
   )
}
export default ContactFormPage;