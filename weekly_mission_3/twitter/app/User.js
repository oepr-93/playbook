class User{
	constructor(id, username, name, bio, dateCreated, lastUpdated){
		this.id = id;
		this.username = username;
		this.name = name;
		this.bio = bio;
		this.dateCreated = new Date();
		this.lastUpdated = new Date();
		Object.assign(this, {
			get getUsername() { return username; },
			get getBio() { return bio; },
			get getDateCreated() { return dateCreated; },
			get getLastUpdated() { return lastUpdated; },
			set setUsername(value) { username = value; },
			set setBio(value) { bio = value; }
		});
	}
}
module.exports = User;