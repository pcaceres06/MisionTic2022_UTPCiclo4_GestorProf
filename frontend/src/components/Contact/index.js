import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = ({props ,Correo ,wpp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '0rem', marginTop:'-100px', marginLeft:'50%' }}>Contacto</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody >
              {Correo}
              {wpp}
          </CardBody>
        </Card>
      </Collapse>

    </div>
  );
}

export default Contact;