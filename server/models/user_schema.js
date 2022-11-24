const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		first_name: {
			type: String,
			required: [true, 'first_name field is required'],
		},
		last_name: {
			type: String,
			required: [true, 'last_name field is required'],
		},
		email: {
			type: String,
			required: [true, 'email field is required'],
		},
		password: {
			type: String,
			required: [true, 'password field is required'],
		},
	},
	{ timestamps: true },
);

module.exports = model('users', userSchema);
