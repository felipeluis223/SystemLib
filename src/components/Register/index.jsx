import { useState } from 'react';
import { Cryptography } from '../../settings/cryptography'
import { useNavigate } from "react-router-dom";

export default function Register(){
	const [ showPassword, setShowPassword ] = useState(false);
	const [ values, setValues ] = useState({
		name: '',
		email: '',
		phone: '',
		username: '',
		password: ''
	});

	// Váriavel responsável pela navegação entre as rotas/páginas:
	const navigate = useNavigate();

	// Criptografar e desencriptografar os dados em objeto:
	const key = '0123456789abcdef0123456789abcdef';
	const iv = 'abcdefghijklmnop';

	const encrypted = new Cryptography(key, iv);

	// Limpando os valores em cache dos inputs e retornando à rota de login:
	function backLogin(){
		navigate("/");
	}

	function onChange(e){
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	function register(){
		const token = encrypted.encode(values)
		window.localStorage.setItem('token', token);
	}
	
	return (
		<section>
			<label>Name:</label>
			<input type='text' placeholder='Your full name' name='name' onChange={onChange} />

			<br /><br />

			<label>Email:</label>
			<input type='text' placeholder='Your email' name='email' onChange={onChange} />

			<br /><br />

			<label>Phone:</label>
			<input type='number' placeholder='Your phone number' name='phone' onChange={onChange} />
			
			<br /><br />

			<label>Username:</label>
			<input
				type='text' placeholder="Your username" name='username' onChange={onChange} />

			<br /><br />

			<label>Password:</label>
			<input  type={showPassword == false ? 'password':'text'} placeholder='Your password' name='password' onChange={onChange} />

			<br /><br />

			<button onClick={(e)=>setShowPassword(!showPassword)}>Show Password</button>
			<button onClick={(e)=>register()}>Register</button>
			<button onClick={(e)=>backLogin()}>Voltar Login</button>
		</section>
	);
}