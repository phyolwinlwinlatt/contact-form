import React from 'react';
import { Col, Row, Table, Button, ButtonGroup } from 'react-bootstrap';
import Layout from '../commons/Layout';
import classes from '../scss/Table.module.scss';
//import { navigate } from 'react-router-dom';
import { useHistory } from 'react-router';

function FormDataPreviewPage(props) {
   const { name, email, phone, subject, message } = props.location.state;
   const history = new useHistory();

   function handleCancel(e) {
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
}

function handleSave() {
   localStorage.setItem('name', name)
   localStorage.setItem('email', email)
   localStorage.setItem('phone', phone)
   localStorage.setItem('subject', subject)
   localStorage.setItem('message', message)

   navigate('/success')
}

return (
   <Layout>
      <Table className={classes.table} hover>
         <h5>Information Preview</h5>
         <tbody>
            <tr>
               <td>Name</td>
               <td>{name}</td>
            </tr>
            <tr>
               <td>Email</td>
               <td>{email}</td>
            </tr>
            <tr>
               <td>Phone</td>
               <td>{phone}</td>
            </tr>
            <tr>
               <td>Subject</td>
               <td>{subject}</td>
            </tr>
            <tr>
               <td>Message</td>
               <td>{message}</td>
            </tr>
            <ButtonGroup style={{ float: 'right', marginBottom: '10px', marginTop: '10px' }}>
               <Button
                  type='button'
                  variant='light'
                  onClick={handleCancel}
               >Cancel
               </Button>
               <Button
                  type='button'
                  variant='primary'
                  onClick={handleSave}
               >
                  Save
               </Button>
            </ButtonGroup>
         </tbody>
      </Table>
   </Layout>
)
}
export default FormDataPreviewPage;