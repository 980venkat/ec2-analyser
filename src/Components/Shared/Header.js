import { Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import React, {Component} from 'react';
import Amplify from 'aws-amplify';
import awsmobile from './../../aws-exports';

Amplify.configure(awsmobile);

export default class Header extends Component {
  constructor(props) {
   super(props);
   this.signOut = this.signOut.bind(this);
 }

   signOut() {
     Auth.signOut();
   }

    render(){
      const name = Auth.user && Auth.user.username;
      const message = `Hello, ${name}`;
    //  var us =   Auth.user.signInUserSession.accessToken.payload;
  // var us =   Auth.currentSession().accessToken;

  const session =  Auth.user.signInUserSession.idToken.payload["cognito:groups"];
  var user = JSON.stringify(session);

  // the array of groups that the user belongs to

      // get the tenant from the top of the cognito groups list
    //  const cognitogroups = us.signInUserSession.accessToken.payload["cognito:groups"]

        return (
             <header id="header" class="header">
            <div class="header-menu">
                <div class="col-sm-7">
                    <a id="menuToggle" class="menutoggle pull-left"><i class="fa fa fa-tasks"></i></a>
                    <div class="header-left">
                        <button class="search-trigger"><i class="fa fa-search"></i></button>
                          <h1>{message}</h1>
                          <h2>{user}</h2>
                          <Button light outline sm border="0" onClick={this.signOut}>Sign Out</Button>
                    </div>
                 </div>
            </div>

        </header>

        )
    }
}
