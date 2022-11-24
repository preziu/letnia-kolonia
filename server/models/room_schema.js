const { Schema, model } = require('mongoose');

const roonSchema = new Schema(
	{
		room_number: {
			type: Number,
			required: [true, 'age field is required'],
		},
		beds: {
			type: Number,
			required: [true, 'beds field is required'],
		},
		price: {
			type: Number,
			required: [true, 'age field is required'],
		},
	},
	{ timestamps: true },
);

module.exports = model('room', roomSchema);
