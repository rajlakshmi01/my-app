import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
class AppComp extends React.Component {
       render() {
               return(<React.Fragment>
                       <h1>Welcome to React</h1>
                       <Button variant="success">Submit</Button>
               </React.Fragment>)
       }
}
export default AppComp;
