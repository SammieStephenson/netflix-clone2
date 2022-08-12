import React, { useState, useEffect } from 'react';
import './Nav.css';
function Nav() {
	const [show, handlerShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handlerShow(true);
			} else {
				handlerShow(false);
			}
		});
	});
	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img
				className='nav__logo'
				src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'
			/>

			{/* <button className='nav__avatar'>Login</button> */}
			<img
				className='nav__avatar2'
				src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
				alt='AVATAR'
			/>
		</div>
	);
}

export default Nav;
