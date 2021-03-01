import React, { Component } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import SignUpForm from "./Components/Formes/SignUpForm.jsx";
import SignInForm from "./Components/Formes/SignInForm.jsx";

class App extends Component {
  render() {
    
    return (


      <BrowserRouter >
      
     
        <Switch>
          {/* <Route path='/home' component={Home}/> */}
          <Route path="/SignUpForm" component={SignUpForm} />
          <Route path="/SignInForm" component={SignInForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
