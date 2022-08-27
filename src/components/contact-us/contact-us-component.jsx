import Alert from 'react-bootstrap/Alert';
import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactInfo } from "../data/data.js"
import './contact-us.css';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y58bm7s', 'template_o3rezyc', form.current, 'user_WiyfsTUJQi6oy6E5vtgvY')
      .then((result) => {
          console.log(result.text);
          setSubmitSuccess(true);
      }, (error) => {
          alert('Sorry your message was not sent please contact us via phone or email found in the footer. Thank you');
      });
      e.target.reset()
  };

  return (
    <div>
      <Container className='contact-component-container'>

        <Row className="mb-5 mt-3">
          
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
          {submitSuccess ? (<Alert variant={'success'} >Message sent we will get back to you as soon as possible! Thank you</Alert>) : null}
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
              <br />
              <br />
              {contactInfo.hasOwnProperty("phone") ? (
                <p>
                  <strong>Phone:</strong> {contactInfo.phone}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactInfo.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100" ref={form} onSubmit={sendEmail}>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit" value="Send">
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
