import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};

export default App;
