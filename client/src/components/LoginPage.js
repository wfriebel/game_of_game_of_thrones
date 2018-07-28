import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux'
import { googleLogin } from '../actions/authActions'

export class LoginPage extends Component {
    state = {
        isAuthenticated: false,
        user: null,
        token: ''
    }

    logout = () => {
        this.setState({
            isAuthenticated: false,
            user: null,
            token: ''
        })
    }

    googleResponse = async (googleInfo) => {
        await this.props.googleLogin(googleInfo.accessToken)
    };

    onFailure = (error) => {
        console.log(error);
    };

    render() {
        let content = !!this.state.isAuthenticated
            ? (
                <div>
                    <p>isAuthenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout}>
                            Log out
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                    />
                </div>
            );
            
            return (
                <div>
                    {content}
                </div>
            )
    }
}

const mapDispatchToProps = dispatch => ({
    googleLogin: (accessToken) => dispatch(googleLogin(accessToken))
})

export default connect(undefined, mapDispatchToProps)(LoginPage);