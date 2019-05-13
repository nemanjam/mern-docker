const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	facebookId: {
		type: String,
		required: true,
		unique: true
		},
	facebookEmail: String,
	username: String,
	displayName: String,
	profileUrl: String
});

const User = mongoose.model('users', userSchema);
module.exports = User;
