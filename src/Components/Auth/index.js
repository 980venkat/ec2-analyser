import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import App from './../App';
import Header from '../Shared/Header';
import awsmobile from './../../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsmobile);


class Auth extends Component {
  render() {
    return (
      <div className="App">
<App/>
      </div>
    );
  }
}
// <Authenticator hideDefault={true}>
//     <Greetings
//         inGreeting={(username) => 'Hello ' + username}
//         outGreeting="Please sign in..."
//     />
// </Authenticator>


const MyTheme = {
  button: { backgroundColor: "green", borderColor: "red" },
  };

const signUpFields = [
    {
      label: 'Tech Mahindra Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Set Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
  ];




export default withAuthenticator(Auth, {
  usernameAttributes: 'email',
  signUpConfig: {
    header: ' Sign Up With TechM email ID',
    hiddenDefaults: ['phone_number'],
    signUpFields: signUpFields,
    theme: MyTheme
  }
});
