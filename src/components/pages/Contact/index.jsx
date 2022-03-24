import { Component } from 'react';
import { Form, Button, Stack } from 'react-bootstrap';
import { Header, Container } from '../../shared/styles';
import axios from 'axios';

class Contact extends Component {
  constructor(){
    super()
    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      comments: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {fullName, email, phoneNumber, comments} = this.state;
    const data = {
      'entry.1080699787': fullName,
      'entry.786181199': email,
      'entry.272823': phoneNumber,
      'entry.928903815': comments,
    }
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdEp8TW5dhmiO-soN91oIxkgUB7QQv5ndOxxIwF6ffG1Np9lw/formResponse'
    const queryString = require('query-string')
    const q = queryString.stringifyUrl({
      url: formUrl,
      query: data
    })
    this.sendRequest(q)
    this.setState({    
      fullName: '',
      email: '',
      phoneNumber: '',
      comments: '',})
  }

  sendRequest = async (url) =>{
    let response;
    try {
      response =  await axios.post(url,null,null)
    } catch (e) {
      response = await e
    }
    console.log("Due to CORS, an error message will occur here. Don't worry. The form is working!")
    console.log(response)
  }

  render(){
    return(
      <Stack>
        <Header>Contact Me</Header>
        <Container style={{overflow: "auto"}}>
            <h3>Ask me anything!</h3>
            <Form onSubmit={this.handleSubmit} style={{width: "100%", maxWidth: "750px", textAlign: "left"}}>
              <Form.Group className="mb-3">
                <Form.Label>Name: </Form.Label>
                <Form.Control 
                  placeholder='Please enter your name'
                  name='fullName'
                  value={this.state.fullName}
                  onChange={this.handleChange}
                  required
                  />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email: </Form.Label>
                <Form.Control 
                  type='email' 
                  placeholder='Please enter a valid email address'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number: </Form.Label>
                <Form.Control 
                  placeholder='Enter your phone number (optional)'
                  name='phoneNumber'
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Questions or Comments: </Form.Label>
                <Form.Control
                  as='textarea' 
                  placeholder='Enter your message'
                  name='comments'
                  value={this.state.comments}
                  onChange={this.handleChange}
                  style={{ height: '150px' }}
                  required
                />
              </Form.Group>
              <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        </Container>
      </Stack>
    )
  }
};

export default Contact;