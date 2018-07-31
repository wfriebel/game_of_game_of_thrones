import React from 'react'
import CharacterItem from './CharacterItem'
import { connect } from 'react-redux'

export const CharacterList = (props) => (
    <div>
        <div>
            <h2>Character</h2>
            <h2>Description</h2>
        </div>
        {
            props.characters.map((character) => (
                <CharacterItem key={character._id} character={character} />
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    characters: state.characters.items,
    error: state.characters.error,
    loading: state.characters.loading,
})

export default connect(mapStateToProps)(CharacterList)