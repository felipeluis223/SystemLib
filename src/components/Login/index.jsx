import { useState } from 'react';

export default function Login(){
	const [ showPassword, setShowPassword ] = useState(false);
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

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

			<button onClick={(e)=>console.log(`Usename: ${username}\nPassword: ${password}`)}>Login</button>
		</section>
	);
}