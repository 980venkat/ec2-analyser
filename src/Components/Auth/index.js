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



export default withAuthenticator(Auth, {
  usernameAttributes: 'email',
  signUpConfig: {
    hiddenDefaults: ['phone_number']
  }
});
