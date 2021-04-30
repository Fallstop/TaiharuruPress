

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
const SuccessText = styled.h4`
  color: #32a852;
  font-weight: bold;
`;

function ContactForm() {
  const [state, handleSubmit] = useForm("mzbydrbv");
  if (state.succeeded) {
    document.getElementById("formSuccessText").innerHTML = "Success!"
    setTimeout(() => {  document.getElementById("formSuccessText").innerHTML = "" }, 2000);

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
      <ErrorText id="formErrorText"></ErrorText>
      <SuccessText id="formSuccessText"></SuccessText>
      <StyledSubmit id="formSubmit" type="submit" disabled={state.submitting} onsubmit={function() {document.getElementById("formSubmit").innerHTML = "Sending..."; document.getElementById("formErrorText").innerHTML = ""}}>
        Submit
      </StyledSubmit>
    </StyledForm>
  );
}

const MailingPage = props => {

  return (
    <Layout location={props.location} noCover={true}>
      <SEO title="Mailing List" />
      <Hero title="Join our Mailing List" subTitle="Get notified when new books come out and when events are happing."/>
      <Wrapper style={{display: 'block'}}>
        <SubTitle>Just submit your email address!</SubTitle>
        <ContactForm />
      </Wrapper>
    </Layout>
  );
};

export default MailingPage;
