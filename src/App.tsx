import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard';
import Vendors from './pages/vendors';
import Categories from './pages/categories';
import Products from './pages/products';
import { useSelector } from './hooks';

const App: React.FC = () => {
	return (
		<Routes>
			<Route
				path='/login'
				element={
					<ProtectedRoute>
						<Login />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/dashboard'
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/vendors'
				element={
					<ProtectedRoute>
						<Vendors />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/category'
				element={
					<ProtectedRoute>
						<Categories />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/products'
				element={
					<ProtectedRoute>
						<Products />
					</ProtectedRoute>
				}
			/>
			<Route path='*' element={<div>404 not found!</div>} />
		</Routes>
	);
};

const ProtectedRoute = ({ children }) => {
	const location = useLocation();
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	if (location.pathname === '/login' && !isLoggedIn) return children;
	if (location.pathname === '/login' && isLoggedIn) {
		alert('Already LoggedIn');
		return <Navigate to='/dashboard' />;
	}

	return isLoggedIn ? children : <Navigate to='/login' />;
};

export default App;
