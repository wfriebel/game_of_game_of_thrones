import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/authActions'
import AppRouter from '../routers/AppRouter'

export class AppRouterContainer extends Component {
    componentDidMount() {
        if(!this.props.user && !!this.props.token) {
            this.props.fetchUser()
        }
    }

    render() {
        return (
            <AppRouter />
        )
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRouterContainer)