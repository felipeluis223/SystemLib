import { useState } from 'react';

export default function Register(){
	const [ showPassword, setShowPassword ] = useState(false);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	// Itens que faltam:
	// * Verificar e tratar os inputs - REGEX;
	// * Armazenar em cache - LocalStorage;
	// * Limpar os inputs e disparar um alerta de suceso ou insucesso.

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
				type='text' placeholder="Your email" onChange={(e)=>setUsername(e.target.value)} />

			<br /><br />

			<label>Password:</label>
			<input  type={showPassword == false ? 'password':'text'} placeholder='Your password' onChange={(e)=>setPassword(e.target.value)}/>

			<br /><br />

			<label>Confirm password:</label>
			<input type={showPassword == false ? 'password':'text'} placeholder='Your password' onChange={(e)=>setConfirmPassword(e.target.value)} />

			<br /><br />

			<button onClick={(e)=>setShowPassword(!showPassword)}>Show Password</button>
			<button onClick={(e)=>submit()}>Login</button>
		</section>
	);
}