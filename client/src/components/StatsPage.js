import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamStatsList from './TeamStatsList'
import { fetchActions } from '../actions/characterActionsActions'

export class StatsPage extends Component {
    componentDidMount() {
        fetchActions(this.props.leagueId)
    }

    render() {
        return (
            <TeamStatsList />
        )
    }
}

const mapStateToProps = state => ({
    leagueId: state.auth.user.league._id
})

const mapDispatchToProps = dispatch => ({
    fetchActions: (leagueId) => dispatch(fetchActions(leagueId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StatsPage)