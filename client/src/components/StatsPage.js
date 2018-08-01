import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchActions } from '../actions/actionsActions'

export class StatsPage extends Component {
    componentDidMount() {
        fetchActions(this.props.user.leagueId)
    }

    render() {
        return (
            <div>
                <h1>Stats</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    actions: state.actions.items
})

const mapDispatchToProps = dispatch => ({
    fetchActions: (leagueId) => dispatch(fetchActions(leagueId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StatsPage)