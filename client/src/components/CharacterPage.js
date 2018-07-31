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
        let content;
        if(this.props.loading) {
            content = <p>loading...</p>
        } else if (this.props.error) {
            content = <p>Unable to retrieve characters</p>
        } else {
            content = <CharacterList />
        }
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialLoadComplete: state.characters.initialLoadComplete,
    loading: state.characters.loading,
    error: state.characters.error
})

const mapDispatchToProps = (dispatch) => ({
    fetchCharacters: () => dispatch(fetchCharacters())
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage)