// prod.js - production keys
module.exports = {
	mongoURI: process.env.MONGO_URI,
	facebookAppID: process.env.FACEBOOK_APP_ID,
	facebookSecret: process.env.FACEBOOK_SECRET,
	facebookCallbackURL: '/auth/facebook/callback',
	facebookRedirectURL: '/',
	secretOrKey: 'secret'
}
