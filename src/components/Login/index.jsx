import { useState } from 'react';

import { VerifyLogin } from './verify'

export default function Login(){
	const [ showPassword, setShowPassword ] = useState(false);
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	// Itens que faltam:
	// * Verificar e tratar os inputs - REGEX;
	// * Verificar se há dados em cache e são válidos - LocalStorage;
	// * Limpar os inputs e direcionar para o menu.

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
		</section>
	);
}