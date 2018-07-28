const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const { clearDatabase } = require('../seeds/populateData');
const {
    populateDatabase,
    league,
    users,
    characters,
    characterOwners,
    actionTypes,
    actions
} = require('../seeds');

beforeAll(populateDatabase);
afterAll(() => {
    console.log('disconecting from mongoose');
    mongoose.disconnect()
});

describe('GET /api/characters', () => {
    test('It should GET all characters', () => {
        return request(app).get('/api/characters')
        .expect(200)
        .then(res => {
            expect(res.body.length).toBe(characters.length);
            const character = characters[0];
            const characterDB = res.body.find(item => item._id === String(character._id));
            expect(characterDB.description).toBe(character.description);
        })
    })
})

describe('GET /api/characters/:characterId', () => {
    test('it should GET a character', () => {
        character = characters[0];
        return request(app).get(`/api/characters/${character._id}`)
            .expect(200)
            .then(res => {
                expect(res.body._id).toBe(String(character._id));
            });
    });
    // test('It should return 404 if user not present', () => {
    //     character = characters[0]
    //     return request(app).get(`/api/characters/${character._id}`)
    // })
})

describe('GET /api/leagues/:leagueId/users/:userId/characters', () => {
    test('it shoud GET all of a user\'s characters', () => {
        const user = users[0];
        const characterIds = characterOwners.filter(item => item.owner === user._id).map(item => String(item.character));
        return request(app).get(`/api/leagues/${league._id}/users/${user._id}/characters`)
            .expect(200)
            .then(res => {
                expect(res.body.length).toBe(characterIds.length);
                expect(characterIds).toContain(res.body[0]._id);
            });
    });
});