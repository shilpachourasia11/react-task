'use strict'

let models = require('../sqldb')();
let workSpace = models.work_space;
let rating = models.rating

module.exports = () => {
	return workSpace.bulkCreate(require('./workSpace')())
	.then(() => {
		return rating.bulkCreate(require('./rating')())
	})
}
