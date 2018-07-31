const charactersReducerDefaultState = [{
    _id: 2,
    name: 'Will Friebel',
    imageURL: 'some image',
    description: 'He is cool'
}]

const charactersReducer = (state = charactersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_CHARACTERS':
            return action.payload;
        default:
            return state
    }
}

export default charactersReducer