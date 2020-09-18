import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'


export default function Contact() {
    
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if(email !== '' && subject !== '' && message !== ''){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [email, subject, message])

    function sendMessage(e) {
          e.preventDefault();
          setEmail('');
          setSubject('');
          setMessage('');
          alert('Message Sent!');
        }

    return (
        <Container>
      <div id="contact" className="section1 contact-form">
        <h3>Get In Touch</h3>
          <Form onSubmit={(e) => sendMessage(e)}>
            <Form.Group controlId="userEmail">
              <Form.Label>Email Address </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e)}
                placeholder="sample@email.com"
                required
              />
              <Form.Text className="text-muted">
                I'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="subject">
              <Form.Label> Subject </Form.Label>
              <Form.Control
                type="text"
                value={subject}
                onChange={(e) => setSubject(e)}
                placeholder="Subject Title"
                required
              />
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Label> Message </Form.Label>
              <Form.Control
                type="text"
                value={message}
                onChange={(e) => setMessage(e)}
                placeholder="Type in your Message"
                required
              />
            </Form.Group>
            {isActive ? (
              <Button
                variant="primary"
                id="submitButton"
                type="submit"
                disabled
              >
                Send
              </Button>
            ) : (
              <Button variant="primary" id="submitButton" type="submit">
                Send
              </Button>
            )}
          </Form>
        </div>
        </Container>
    );
}
