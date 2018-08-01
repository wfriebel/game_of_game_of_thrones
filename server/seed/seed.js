const mongoose = require('mongoose');
const faker = require('faker');
const { sample } = require('lodash')
require('../config')

const { User } = require('../models/User');
const { League } = require('../models/League');
const { Character } = require('../models/Character');
const { ActionType } = require('../models/ActionType');
const { Action } = require('../models/Action');
const { CharacterOwner } = require('../models/CharacterOwner');
const actionCategories = require('../models/actionCategories');

const seed = async () => {
    try {
        const league = await new League().save();

        for(let i = 0; i < 6; i++) {
            await new User({
                method: 'google',
                google: {
                    first: faker.name.firstName(),
                    last: faker.name.lastName(),
                    email: faker.internet.email().replace(/\_/g, '.'),
                    imageURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350'
                },
                league: league.id
            }).save();
        }

        const users = await User.find();

        for(let i = 0; i < 20; i++) {
            await new Character({
                name: faker.name.findName(),
                description: faker.lorem.paragraph(),
                imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwNWn1BMrObhD8KA7V5_W7PjfhhoH94gZrGurokYU6QwiAqkE6'
            }).save();
        }

        const characters = await Character.find();

        for(let i = 0; i < characters.length; i++) {
            await new CharacterOwner({
                character: characters[i]._id,
                owner: users[i % users.length],
                league: league._id
            }).save();
        };
        
        for(let i = 0; i < 20; i++) {
            await new ActionType({
                description: faker.company.bs(),
                category: sample(actionCategories),
                points: sample([1, 2, 3, 4, 5, 6])
            }).save();
        }

        const actionTypes = await ActionType.find();

        for(let i = 0; i < 50; i++) {
            const character = sample(characters);
            const characterOwner = await CharacterOwner.findOne({ league: league.id, character: character.id });
            const user = characterOwner.owner;
            await new Action({
                character: character._id,
                user: user._id,
                actionType: sample(actionTypes),
                league: league._id,
                week: sample([1, 2])
            }).save();
        }
        
    } catch(e) {
        return Promise.reject(e);
    }
}


const database = process.env.MONGODB_URI
mongoose.connect(database, { useNewUrlParser: true })
    .then(async () => {
        console.log(`Seeding ${database}`)
        return await seed()
    })
    .then(() => {
        console.log(`Seeding complete`)
        mongoose.disconnect()
    })
    .catch(e => {
        console.log(`An error occured when trying to seed ${database}:`, e)
        mongoose.disconnect()
    })