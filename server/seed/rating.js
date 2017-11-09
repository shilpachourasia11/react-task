'use strict';

let faker = require('faker');

module.exports = () => {
	let rating = [];

	for(let i=1; i<=80; i++){
		rating.push({
			 monthly: faker.random.number(),
			 hourly: faker.random.number(),
			 daily: faker.random.number(),
       work_space_id: i
		})
	}
	return rating;
}
