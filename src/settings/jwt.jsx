import { useJwt } from 'react-jwt';

export default class JWT{

	encode(data){
		console.log('criptografando: ', data);
	}

	decode(token){
		try{
			const { decodedToken, isExpired } = useJwt(token);
			return decodedToken;
		}
		catch(error){
			console.log('erro no token: ', error);
		}
	}
}