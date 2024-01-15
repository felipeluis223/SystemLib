import '../index.css'
import { Outlet } from 'react-router-dom'

export function TemplateLogin(){
	return (
		<section className="container-login">
			<Outlet />
		</section>
	)
}