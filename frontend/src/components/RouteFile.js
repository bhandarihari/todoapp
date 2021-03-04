import React, { Component } from 'react';
import {BrowserRouter ,Redirect, Route , Switch} from 'react-router-dom';
import {NavbarLogic} from './NavBar/NavbarLogic';
import LoginLogic from './Login/LoginLogic';
import ShowListLogic from './ShowList/ShowListLogic';
import AddListLogic from './AddList/AddListLogic';
import RegistorLogic from './Registration/RegistrationLogic'

const PrivateRoute = ({ component: Component, ...rest }) => {
   const token = localStorage.getItem('token')
    return (
  <Route {...rest} render={(routeProps)=>(
  token
  ?<>
      <NavbarLogic  />
      <div className="main"  >
          <Component {...routeProps} />
      </div>
  </>
  :<Redirect to="/login"/>
  )} >
  </Route>
    );
  };

export default class RouteFile extends Component {
    constructor() {
        super()
        this.state = {
             token:""
        }
    }
    
    render() {
        return (
            <>
              <BrowserRouter>
                  <Switch>
                  <PrivateRoute exact path='/' component={ShowListLogic} />
                  <PrivateRoute exact path='/view_list' component={ShowListLogic} />
                  <PrivateRoute exact path='/add_list' component={AddListLogic} />
                  <Route  path='/login' component={LoginLogic} />
                  <Route  path='/registor' component={RegistorLogic} />
                  </Switch>
              </BrowserRouter>  
            </>
        )
    }
}
