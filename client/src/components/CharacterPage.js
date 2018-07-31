import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharacterList from './CharacterList'
import { fetchCharacters } from '../actions/charactersActions'

class CharacterPage extends Component {
    componentDidMount() {
        if(!this.props.initialLoadComplete) {
            this.props.fetchCharacters();
        }
     }

    render() {
        return (
            <div>
                <CharacterList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialLoadComplete: state.characters.initialLoadComplete
})

const mapDispatchToProps = (dispatch) => ({
    fetchCharacters: () => dispatch(fetchCharacters())
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage)