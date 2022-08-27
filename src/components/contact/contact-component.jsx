import React from "react";
import { Col } from "react-bootstrap";
import './contact-styles.css';
import ContactUs from '../contact-us/contact-us-component.jsx';

const Contact = () => {

  return (
    <div>
      <Col lg="8">
        <h1 className="display-4 mb-4 contact-us">Contact Us</h1>
        <hr className="t_border my-4 ml-0 text-left" />
      </Col>
      <div className='spacer'></div>
      <ContactUs />
      <div className='spacer'></div>
    </div>
  );
}

export default Contact
