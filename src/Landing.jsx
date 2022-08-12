// import React, {useState} from "react";
import React from 'react';
import './Landing.css';
// import {useNavigate} from 'react-router-dom';
// import Login from "./pages/login/Login";
// import Login from "../login/Login";
import { Link } from 'react-router-dom';
import profiles from './profiles.json';

export default function Landing() {
	// const Homeroute=()=>{
	//  console.log('click');
	//  const [state,setState]=useState(false);
	//   let url="/Login";
	//   let element=<a href={url}></a>;

	//  <Route path="/Login">

	//   </Route>

	// }

	return (
		<div className='landing-container'>
			<img className='logo' src='https://i.postimg.cc/63FJH5dQ/Net.png' />
			<div className='content'>
				<span className='title'>Who's Watching?</span>
				<div className='profiles'>
					{profiles.map((profile, index) => (
						<Link to={'/gallery'} className='profile'>
							<img className='img' src={profile.image_src} />
							<span className='username'>{profile.username}</span>
						</Link>
					))}
				</div>

				<button className='bttn'>Manage Profiles</button>
			</div>
		</div>
	);
}
