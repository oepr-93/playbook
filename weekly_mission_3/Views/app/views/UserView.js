const UserService = require('../services/UserService')

class UserView{
	static create(payload){
		if (payload === null){
			let resultado = {error:"payload no existe"};
			return resultado;
			
		}
		else{
			if (payload.username === null || payload.id === null || payload.name === null){
				let resultado = {error:"necesitan tener un valor válido"};
				return resultado;
			}
			if (payload.username === undefined || payload.id === undefined || payload.name === undefined){
				let resultado = {error:"necesitan tener un valor válido"};
				return resultado;
			}
			else{
				return UserService.create(payload.id, payload.username, payload.name);
			}
				
		}
		
	}
}
module.exports = UserView;