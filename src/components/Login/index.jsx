import { useState } from 'react';
import { VerifyLogin } from './verify'
import { useNavigate } from "react-router-dom";
import { Cryptography } from '../../settings/cryptography'
import { IoPersonCircleSharp } from "react-icons/io5";


export default function Login(){
	const [ showPassword, setShowPassword ] = useState(false);
	const [ values, setValues ] = useState({
		username: '',
		email: '',
		password: ''
	});

	const navigate = useNavigate();


	// Criptografar e desencriptografar os dados em objeto:
	const key = '0123456789abcdef0123456789abcdef';
	const iv = 'abcdefghijklmnop';
	const encrypted = new Cryptography(key, iv);

	function onChange(e){
		setValues({
			...values,
			[e.target.name]: e.target.value
		})

	}

	function submit(){
		try{
			const token = window.localStorage.getItem('token');
			console.log(`Usename: ${values.username}\nPassword: ${values.password}`);
			const resultDecode = encrypted.decode(token, key, iv);
			console.table(resultDecode);
		}
		catch(error){
			console.log(error);
		}
		
	}
	
	return (
		<section className='container-content-login'>
			<div className='container-title'>
				<h3>LibSystem</h3>
			</div>
			<span>Welcome in login</span>
			<section className='content-login'>
				<div className='container-input'>
					<IoPersonCircleSharp />
					<label>Username:</label>	
					<input
						type='text'
						name='username_email'
						placeholder="Your email"
						onChange={onChange}
					/>
				</div>
				
				<div className='container-input'>
					<label>Password:</label>
					<input 
						type={showPassword == false ? 'password':'text'} 
						name='password'
						onChange={onChange}
						placeholder='Your password'
					/>
				</div>

				<button onClick={(e)=>setShowPassword(!showPassword)}>Show Password</button>

				<button onClick={(e)=>submit()}>Login</button>
				
				<button onClick={(e)=>navigate("register")}>Register</button>
			</section>
		</section>
	);
}