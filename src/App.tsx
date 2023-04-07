import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard';
import Vendors from './pages/vendors';
import Categories from './pages/categories';
import Products from './pages/products';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/vendors' element={<Vendors />} />
			<Route path='/category' element={<Categories />} />
			<Route path='/products' element={<Products />} />
			<Route path='*' element={<Navigate to='/login' />} />
		</Routes>
	);
};

export default App;
