// require mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bikerSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		class: {
			type: String,
			required: true,
		},
		miles: {
			type: Number,
			required: true,
			min: 1,
			max: 50,
		},
	},
	{
		timestamps: true,
	}
)

const Biker = mongoose.model('Biker', bikerSchema)

module.exports = Biker