import React from 'react';

class Home extends React.Component{

    state = {
        message : ''
    }

    componentDidMount(){
        const token = localStorage.getItem( 'token' );
        const options = {
            method : 'GET',
            headers : {
                'session_token' : token
            }
        }

        fetch( "http://localhost:8080/api/validate", options )
            .then( response => {
                if( response.ok ){
                    return response.json();
                }

                throw new Error( response.statusText );
            })
            .then( responseJson => {
                this.setState({
                    message : responseJson.message
                })
            })
            .catch( err => {
                console.log( err.message );
                this.props.history.push( '/login' );
            });
    }

    render(){
        return(
            <div>
                <h1> {this.state.message} </h1>
            </div>
        )
    }
}

export default Home;