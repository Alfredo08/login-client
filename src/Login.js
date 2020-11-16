import React from 'react';

function Login( props ){

    return(
        <form onSubmit={props.login}>
          <label htmlFor="userName"> Username: </label>
          <input type="text" id="userName" />
          <label htmlFor="userPassword"> Password: </label>
          <input type="password" id="userPassword" />
          <button type="submit">
            Login
          </button>
        </form>
    )
}

export default Login;