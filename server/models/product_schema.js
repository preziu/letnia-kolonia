const { Schema, model } = require('mongoose');

const productSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'name field is required'],
		},
		price: {
			type: Number,
			required: [true, 'price field is required'],
		},
	},
	{ timestamps: true },
);

module.exports = model('product', productSchema);
