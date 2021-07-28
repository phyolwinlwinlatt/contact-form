import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import Layout from '../commons/Layout';
import classes from '../scss/Alert.module.scss'
import {useHistory} from 'react-router-dom'
function SuccessPage() {
   const history = useHistory();
   return (
      <Layout>
         <Alert variant='primary' className={classes.alert}>
            <h3>Thank for contact us</h3>
            <p>We appreciate all the information and advices</p>
            <p>We will fix and prepare the requirements</p>
         </Alert>
         <div style={{marginBottom:'20px'}}>
            <Button
               type='button'
               onClick={() => history.push('/')}
               variant='primary'
            >Next Contact
            </Button>
         </div>
      </Layout>
   )
}
export default SuccessPage;