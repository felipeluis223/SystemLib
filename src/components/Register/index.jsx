import { useState } from 'react';
import { Cryptography } from '../../settings/cryptography'
import { useNavigate } from "react-router-dom";

import { IoPersonCircleOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineLockPerson, MdOutlineAlternateEmail, MdOutlineLocalPhone, MdOutlinePersonAdd } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";


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

	// Criptografar e descriptografar os dados em objeto:
	const key = '0123456789abcdef0123456789abcdef';
	const iv = 'abcdefghijklmnop';

	const encrypted = new Cryptography(key, iv);


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

		<section className='container-content-login'>
			<div className='container-title'>
				<h3>DevLib</h3>
			</div>
			<span style={{color: '#000000'}}>Create an account to access:</span>
			<section className='content-login'>
				<div className='container-input'>
					<div>
						<IoPersonCircleOutline className='icons-login' />
					</div>	
					<section>
						<input type='text' placeholder='Your full name' name='name' onChange={onChange} />
					</section>
				</div>

				<div className='container-input'>
					<div>
						<MdOutlineAlternateEmail className='icons-login' />
					</div>	
					<section>
						<input type='text' placeholder='Your email' name='email' onChange={onChange} />
					</section>
				</div>

				<div className='container-input'>
					<div>
						<MdOutlineLocalPhone className='icons-login' />
					</div>	
					<section>
						<input type='number' placeholder='Your phone number' name='phone' onChange={onChange} />
					</section>
				</div>

				<div className='container-input'>
					<div>
						<MdOutlinePersonAdd className='icons-login' />
					</div>	
					<section>
						<input type='text' placeholder="Your username" name='username' onChange={onChange} />
					</section>
				</div>
				
				<div className='container-input'>
					<div>
						<MdOutlineLockPerson className='icons-login' />
					</div>
					<section>
							<input  type={showPassword == false ? 'password':'text'} placeholder='Your password' name='password' onChange={onChange} />

						<button onClick={(e)=>setShowPassword(!showPassword)}>
							{
								showPassword != true ? <FiEye className='icons-login-password' />:<FiEyeOff className='icons-login-password' />
							}
							
						</button>
					</section>
				</div>			
				<div className='container-buttons-login'>
					<button onClick={(e)=>register()} className="button-login">Register</button>
					
					<div className="container-access-google">
						<FcGoogle className='icons-google'/>
						<RiFacebookFill className='icons-google' style={{color: '#1877f2'}}/>
					</div>
				</div>
			</section>

			<button onClick={(e)=>navigate("/")} className='button-create-account' style={{marginTop: 5}}>I already have an account</button>
		</section>
		
	);
}