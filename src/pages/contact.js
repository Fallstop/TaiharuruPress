
import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';

import Layout from '../components/layout';
import Wrapper from '../components/Wrapper';
import SEO from '../components/SEO';
import { Text } from '../components/Commons';
import Hero from '../components/Hero';

const StyledForm = styled.form`
border-radius: 5px;
border: #f2f2f2 2px solid;
padding: 20px;
margin-top: 4em;
`;

const StyledTextArea = styled.textarea`

  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

`;



const StyledInput = styled.input`

  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

`;


const StyledSubmit = styled.button`
width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const SubTitle = styled.h2`
  padding-top: 40px;
  line-height: 1.2;
  border-top: 1px solid #ececec;
  margin-top: 44px;
`;

const ErrorText = styled.h4`
  color: #ff3333;
  font-weight: bold;
`;


function ContactForm() {
  const [state, handleSubmit] = useForm("myylzbkj");
  if (state.succeeded) {
    return <SubTitle>Sent! Thanks for contacting us.</SubTitle>;
  }
  else if (state.succeeded === false && state.errors.length > 0) {
    document.getElementById("formSubmit").innerHTML = "Submit"
    
    document.getElementById("formErrorText").innerHTML = state.errors[0].message

  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <StyledInput
        id="email"
        type="email"
        name="email"
        required={true}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="fullname">
        Full Name:
      </label>
      <StyledInput
        id="fullname"
        name="fullname"
        required={true}
      />
      <ValidationError
        prefix="Full Name"
        field="fullname"
        errors={state.errors}
      />
      <label htmlFor="email">
        Message:
      </label>
      <StyledTextArea
        id="message"
        name="message"
        required={true}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        
      />
      <ErrorText id="formErrorText"></ErrorText>
      <StyledSubmit id="formSubmit" type="submit" disabled={state.submitting} onsubmit={function() {document.getElementById("formSubmit").innerHTML = "Sending..."; document.getElementById("formErrorText").innerHTML = ""}}>
        Submit
      </StyledSubmit>
    </StyledForm>
  );
}

const ContactUsPage = props => {

  return (
    <Layout location={props.location} noCover={true}>
      <SEO title="Contact Us" />
      <Hero title="Contact Us" />
      <Wrapper style={{display: 'block'}}>
        <SubTitle>Contact us through this form.</SubTitle>
        <ContactForm />
      </Wrapper>
    </Layout>
  );
};

export default ContactUsPage;
