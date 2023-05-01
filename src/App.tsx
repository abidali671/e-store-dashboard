import React from 'react';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dashboard from './pages/dashboard';
import Vendors from './pages/vendors';
import Categories from './pages/categories';
import Products from './pages/products';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from './hooks';
import { pathnames } from '@types';
import AddProduct from './pages/addProduct';
import ForgetPassword from './pages/auth/forgot_password';
import ResetPassword from './pages/auth/reset_password';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path={pathnames.REGISTER} element={<Register />} />
			<Route
				path={pathnames.LOGIN}
				element={
					<ProtectedRoute>
						<Login />
					</ProtectedRoute>
				}
			/>
			<Route
				path={pathnames.DASHBOARD}
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
			<Route
				path={pathnames.VENDORS}
				element={
					<ProtectedRoute>
						<Vendors />
					</ProtectedRoute>
				}
			/>
			<Route
				path={pathnames.CATEGORY}
				element={
					<ProtectedRoute>
						<Categories />
					</ProtectedRoute>
				}
			/>
			<Route
				path={pathnames.PRODUCTS}
				element={
					<ProtectedRoute>
						<Products />
					</ProtectedRoute>
				}
			/>
			<Route
				path={pathnames.ADD_PRODUCT}
				element={
					<ProtectedRoute>
						<AddProduct />
					</ProtectedRoute>
				}
			/>
			<Route path={pathnames.FORGET_PASSWORD} element={<ForgetPassword />} />
			<Route path={pathnames.RESET_PASSWORD} element={<ResetPassword />} />
			<Route path='/' element={<Navigate to={pathnames.DASHBOARD} />} />
			<Route path='*' element={<div>page not found</div>} />
		</Routes>
	);
};

const ProtectedRoute = ({ children }) => {
	const location = useLocation();
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	const searchParams = new URLSearchParams(location.search);
	const nextRoute = searchParams.get('next');

	if (location.pathname === pathnames.LOGIN && !isLoggedIn) return children;
	if (location.pathname === pathnames.LOGIN && isLoggedIn) {
		return <Navigate to={nextRoute || pathnames.DASHBOARD} />;
	}

	return isLoggedIn ? (
		children
	) : (
		<Navigate to={{ pathname: pathnames.LOGIN, search: 'next=' + location.pathname }} />
	);
};

export default App;
