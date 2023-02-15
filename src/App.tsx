import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard';
import Vendors from './pages/vendors';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/vendors' element={<Vendors />} />
			<Route path='*' element={<Navigate to='/login' />} />
		</Routes>
	);
};

export default App;
