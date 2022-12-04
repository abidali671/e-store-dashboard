import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar.jsx'
function App() {
	return (
		<>
		<Navbar />
			<Routes>
				<Route path='/login' element={<Login />} />
				
			</Routes>
			</>
	);
}

export default App;
