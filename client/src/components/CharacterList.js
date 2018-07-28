import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterList = (props) => (
    <div>
        <div>
            <h2>Character</h2>
            <h2>Description</h2>
        </div>
        {props.characters.map((character) => (
            <CharacterItem key={character._id} character={character} />
        ))}
    </div>
)

CharacterList.defaultProps = {
    characters: [
        {
            _id: '1',
            name: 'Will',
            description: 'He is a cool guy',
            imageURL: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/18739996_1785658754784517_7616335942650207536_n.png?_nc_cat=0&oh=bbc472315fc028f0a83bc21706eb1445&oe=5C0B5DD2'
        },
        {
            _id: '2',
            name: 'Amy',
            description: 'Dances with wolves',
            imageURL: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/18739996_1785658754784517_7616335942650207536_n.png?_nc_cat=0&oh=bbc472315fc028f0a83bc21706eb1445&oe=5C0B5DD2'
        },
        {
            _id: '3',
            name: 'Spencer',
            description: 'What are vegetables?',
            imageURL: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/18739996_1785658754784517_7616335942650207536_n.png?_nc_cat=0&oh=bbc472315fc028f0a83bc21706eb1445&oe=5C0B5DD2'
        }
    ]
}

export default CharacterList