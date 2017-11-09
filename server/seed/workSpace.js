'use strict';

let faker = require('faker');

module.exports = () => {
	let workSpace = [];

	for(let i=1; i<=20; i++){
		workSpace.push({
			 type: 'Open Desk',
			 capacity: faker.random.number(),
			 name: faker.lorem.word(),
		})
		workSpace.push({
			 type: 'Private Cabin',
			 capacity: faker.random.number(),
			 name: faker.lorem.word(),
		})
		workSpace.push({
			 type: 'Training Room',
			 capacity: faker.random.number(),
			 name: faker.lorem.word(),
		})
		workSpace.push({
			 type: 'Event Space',
			 capacity: faker.random.number(),
			 name: faker.lorem.word(),
		})
	}
	return workSpace;
}
