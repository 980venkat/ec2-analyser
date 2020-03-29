import { Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import React, {Component} from 'react';

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

        return (
             <header id="header" class="header">
            <div class="header-menu">
                <div class="col-sm-7">
                    <a id="menuToggle" class="menutoggle pull-left"><i class="fa fa fa-tasks"></i></a>
                    <div class="header-left">
                        <button class="search-trigger"><i class="fa fa-search"></i></button>
                          <h1>{message}</h1>
                          <Button light outline sm border="0" onClick={this.signOut}>Sign Out</Button>
                    </div>
                 </div>
            </div>

        </header>

        )
    }
}
