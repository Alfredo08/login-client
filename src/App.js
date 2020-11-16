import React from 'react';
import Home from './Home';
import Login from './Login';
import {Route, withRouter} from 'react-router-dom';

class App extends React.Component{

  login = ( event ) => {
    event.preventDefault();

    const userLogin = {
      username : event.target.userName.value,
      password : event.target.userPassword.value
    };

    const options = {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify( userLogin )
    };

    fetch( "http://localhost:8080/api/login", options )
      .then( response => {
        if( response.ok ){
          return response.json();
        }

        throw new Error( response.statusText );
      })
      .then( responseJson => {
        localStorage.setItem( 'token', responseJson.token );
        this.props.history.push( '/home' );
      })
      .catch( err => {
        console.log( err.message );
      });
  }
    
  render(){
    return(
      <div>
        <Route exact path='/' render={ (routeProps) => <Login {...routeProps} login={this.login}/>} />
        <Route path='/login' render={ (routeProps) => <Login {...routeProps} login={this.login}/>} />
        <Route path='/home' component={Home} />
      </div>
    )
  }
}


export default withRouter(App);
