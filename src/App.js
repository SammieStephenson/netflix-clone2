import React from 'react';
import Login from './Login';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Gallery from './Gallery';
const App = () => {
	return (
		<Routes>
			<Route path='/Landing' element={<Landing />} />
			<Route path='/Gallery' element={<Gallery />} />
			<Route path='/' element={<Login />} />
		</Routes>
	);
};

export default App;
