const faker = require('faker');
const _ = require('lodash');

const { User } = require('../models/User');
const { League } = require('../models/League');
const { Character } = require('../models/Character');
const { ActionType } = require('../models/ActionType');
const { Action } = require('../models/Action');
const actionCategories = require('../models/actionCategories');

const seed = async () => {
    try {
        await User.remove();
        await League.remove();
        await Character.remove();
        await ActionType.remove();
        await Action.remove();

        const league = await new League().save();

        for(let i = 0; i < 6; i++) {
            await new User({
                first: faker.name.firstName(),
                last: faker.name.lastName(),
                email: faker.internet.email().replace(/\_/g, '.'),
                league: league.id
            }).save();
        }

        const users = await User.find();

        for(let i = 0; i < 20; i++) {
            await new Character({
                name: faker.name.findName(),
                description: faker.lorem.paragraph(),
                imageURL: faker.image.people(),
                owner: _.sample(users)._id
            }).save();
        }

        const characters = await Character.find();
        
        for(let i = 0; i < 20; i++) {
            await new ActionType({
                description: faker.company.bs(),
                category: _.sample(actionCategories)
            }).save();
        }

        const actionTypes = await ActionType.find();

        for(let i = 0; i < 50; i++) {
            const character = _.sample(characters);
            const user = await User.findById(character.owner);
            await new Action({
                character: character._id,
                user: user._id,
                actionType: _.sample(actionTypes),
                league: league._id,
                week: _.sample([1, 2])
            }).save();
        }
        
    } catch(e) {
        return Promise.reject(e);
    }
}

module.exports = seed;