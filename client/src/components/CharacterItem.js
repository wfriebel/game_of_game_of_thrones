import React from 'react'

const CharacterItem = ({ character }) => (
    <div>
        <img src={character.imageURL} style={{width: '100px'}} alt={character.name} />
        <p>{character.name}</p>
        <p>{character.description}</p>
    </div>
)

export default CharacterItem