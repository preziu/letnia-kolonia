const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
	{
		room_id: {
			type: Number,
			required: [true, 'room_id field is required'],
		},
		user_id: {
			type: Number,
			required: [true, 'user_id field is required'],
		},
	},
	{ timestamps: true },
);

module.exports = model('order', orderSchema);
