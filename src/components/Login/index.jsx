import { useState } from 'react';

import { VerifyLogin } from './verify'
import { useNavigate } from "react-router-dom";

export default function Login(){
	const [ showPassword, setShowPassword ] = useState(false);
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const navigate = useNavigate();

	// Itens que faltam:
	// * Verificar e tratar os inputs - REGEX;
	// * Verificar se há dados em cache e são válidos - LocalStorage;
	// * Limpar os inputs e direcionar para o menu.

	function navigateRegister(){
		setUsername('');
		setPassword('');
		navigate("register");
	}

	function submit(){
		console.log(`Usename: ${username}\nPassword: ${password}`);
	}
	
	return (
		<section>
			<label>Username:</label>
			<input
				type='text'
				placeholder="Your email"
				onChange={(e)=>setUsername(e.target.value)}
			/>

			<label>Password:</label>
			<input 
				type={showPassword == false ? 'password':'text'} 
				onChange={(e)=>setPassword(e.target.value)}
				placeholder='Your password'
			/>

			<button onClick={(e)=>setShowPassword(!showPassword)}>Show Password</button>

			<button onClick={(e)=>submit()}>Login</button>

			<br /><br />
			
			<button onClick={(e)=>navigateRegister()}>Register</button>
		</section>
	);
}