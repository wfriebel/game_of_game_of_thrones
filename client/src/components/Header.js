import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'

export class Header extends Component{
    onLogOut = () => {
        this.props.logout()
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to='/'>Game of Game of Thrones</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/teams'>Teams</NavLink>
                    </li>
                    <li>
                        <NavLink to='/characters'>Characters</NavLink>
                    </li>
                    <li>
                        <NavLink to='/stats'>Stats</NavLink>
                    </li>
                    <li>
                        <NavLink to='/update'>Update</NavLink>
                    </li>
                    <li>
                        <button onClick={this.onLogOut}>Logout</button>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(undefined, mapDispatchToProps)(Header);