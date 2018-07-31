import React, { Component } from 'react'
import CharacterItem from './CharacterItem'
import { connect } from 'react-redux'
import { fetchCharacters } from '../actions/charactersActions'

export class CharacterList extends Component {
    componentDidMount() {
       this.props.fetchCharacters();
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Character</h2>
                    <h2>Description</h2>
                </div>
                {
                    this.props.characters.map((character) => (
                        <CharacterItem key={character._id} character={character} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    characters: state.characters
})

const mapDispatchToProps = (dispatch) => ({
    fetchCharacters: () => dispatch(fetchCharacters())
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)