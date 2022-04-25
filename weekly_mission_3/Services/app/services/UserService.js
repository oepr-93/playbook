const User = require('../User')

class UserService{
	static create(id, username, name, bio){
		return new User(id, username, name, "Sin bio");
	}
	static userInfoInList(id, username, name, bio){
		const lista = new User(id, username, name, "Sin bio");
		const list = [lista.id, lista.username, lista.name, lista.bio];
		return list;
	}
	static updateUserName(userr, value){
		userr.username = value;
		return userr;
	}
	static gettUsernames(allusers){
		const list = [allusers[0].username, allusers[1].username, allusers[2]];
		
		return list;
	}
}
module.exports = UserService;