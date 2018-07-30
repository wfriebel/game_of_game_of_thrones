import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux'
import { googleLogin } from '../actions/authActions'

export class LoginPage extends Component {
    googleResponse = async (googleInfo) => {
        await this.props.googleLogin(googleInfo.accessToken)
    };

    onFailure = (error) => {
        console.log(error);
    };

    render() {
        return (
            <div>
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    onSuccess={this.googleResponse}
                    onFailure={this.onFailure}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleLogin: (accessToken) => dispatch(googleLogin(accessToken))
})

export default connect(undefined, mapDispatchToProps)(LoginPage);