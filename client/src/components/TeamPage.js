import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TeamPage extends Component {
    render() {
        return (
           <div>
                <h1>Team Page</h1>
           </div>
        )
    }
}

export default connect()(TeamPage)