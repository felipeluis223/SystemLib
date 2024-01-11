import { useState } from 'react';
import { Cryptography } from '../../settings/cryptography'
import { useNavigate } from "react-router-dom";

export default function Register(){
	const [ showPassword, setShowPassword ] = useState(false);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	// Váriavel responsável pela navegação entre as rotas/páginas:
	const navigate = useNavigate();

	// Criptografar e desencriptografar os dados em objeto:
	const key = 'felipeluis223';
	const iv = 'luisfelipe223';
	const object = {
	    name: "Luis Felipe",
	    email: "felipe@gmail.com",
	    phone: "1992099631",
	    username: "felipeluis223",
	    password: "123456",
	    confirmPassword: "123456"
	};
	const encrypted = new Cryptography(object, key, iv);

	// Itens que faltam:
	// * Verificar e tratar os inputs - REGEX;
	// * Armazenar em cache - LocalStorage;
	// * Limpar os inputs e disparar um alerta de suceso ou insucesso.

	// Limpando os valores em cache dos inputs e retornando à rota de login:
	function backLogin(){
		setName('');
		setEmail('');
		setPhone('');
		setUsername('');
		setPassword('');
		setConfirmPassword('');

		navigate("/");
	}
	function submit(){
		const object = {
			name: name,
			email: email,
			phone: phone,
			username: username,
			password: password,
			confirmPassword: confirmPassword
		};

		console.table(object);

		const result = encrypted.encode()
		console.log(result)
		
		const resultDecode = encrypted.decode(result)
		console.table(resultDecode)
	}
	
	return (
		<section>
			<label>Name:</label>
			<input type='text' placeholder='Your full name' onChange={(e)=>setName(e.target.value)} />

			<br /><br />

			<label>Email:</label>
			<input type='text' placeholder='Your email' onChange={(e)=>setEmail(e.target.value)} />

			<br /><br />

			<label>Phone:</label>
			<input type='number' placeholder='Your phone number' onChange={(e)=>setPhone(e.target.value)} />
			
			<br /><br />

			<label>Username:</label>
			<input
				type='text' placeholder="Your username" onChange={(e)=>setUsername(e.target.value)} />

			<br /><br />

			<label>Password:</label>
			<input  type={showPassword == false ? 'password':'text'} placeholder='Your password' onChange={(e)=>setPassword(e.target.value)}/>

			<br /><br />

			<label>Confirm password:</label>
			<input type={showPassword == false ? 'password':'text'} placeholder='Your password' onChange={(e)=>setConfirmPassword(e.target.value)} />

			<br /><br />

			<button onClick={(e)=>setShowPassword(!showPassword)}>Show Password</button>
			<button onClick={(e)=>submit()}>Register</button>
			<button onClick={(e)=>backLogin()}>Login</button>
		</section>
	);
}