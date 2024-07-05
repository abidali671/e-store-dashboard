import React, { useEffect, useState } from 'react';
import {
	Login,
	Register,
	Dashboard,
	Users,
	Categories,
	Products,
	AddProduct,
	ForgetPassword,
	ResetPassword,
	UserProfile,
	EditCategory,
	Profile,
} from './pages';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ProductOverview } from '@components';
import { pathnames } from '@types';
import { useDispatch, useSelector } from './hooks';
import Order from './pages/order';
import Verify from './pages/auth/verified';
import AddCategory from './pages/addCategory';
import API from './axios';
import { updateUser } from './features/auth/auth.slice';

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
				path={pathnames.PROFILE}
				element={
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
				}
			/>
			<Route
				path={pathnames.USERS}
				element={
					<ProtectedRoute>
						<Users />
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
				path={pathnames.ADD_CATEGORY}
				element={
					<ProtectedRoute>
						<AddCategory />
					</ProtectedRoute>
				}
			/>
			<Route
				path={`${pathnames.EDIT_CATEGORY}/:slug`}
				element={
					<ProtectedRoute>
						<EditCategory />
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
			<Route path={pathnames.VERIFY} element={<Verify />} />
			<Route
				path={`${pathnames.PRODUCT_DETAIL}/:slug`}
				element={
					<ProtectedRoute>
						<ProductOverview />
					</ProtectedRoute>
				}
			/>
			<Route
				path={`${pathnames.USERS}/:id`}
				element={
					<ProtectedRoute>
						<UserProfile />
					</ProtectedRoute>
				}
			/>
			<Route
				path={pathnames.ORDERS}
				element={
					<ProtectedRoute>
						<Order />
					</ProtectedRoute>
				}
			/>

			<Route path='/' element={<Navigate to={pathnames.DASHBOARD} />} />
			<Route path='*' element={<div>page not found</div>} />
		</Routes>
	);
};

const ProtectedRoute = ({ children }) => {
	const location = useLocation();
	const token = useSelector((state) => state.auth.token);
	const [islogged, setIsLogged] = useState(false);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	const fetchMe = async () => {
		try {
			setLoading(true);
			const res = await API.get('/api/auth/me', {
				headers: { Authorization: `Bearer ${token}` },
			});
			const { first_name, last_name, email, username } = res.data;
			dispatch(updateUser({ first_name, last_name, username, email }));

			setIsLogged(true);
			setLoading(false);
		} catch (error) {
			setIsLogged(false);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMe();
	}, [token]);

	const searchParams = new URLSearchParams(location.search);
	const nextRoute = searchParams.get('next');

	if (location.pathname === pathnames.LOGIN && !islogged) return children;
	if (location.pathname === pathnames.LOGIN && islogged) {
		return <Navigate to={nextRoute || pathnames.DASHBOARD} />;
	}

	if (loading) return 'loading..';

	return islogged ? (
		children
	) : (
		<Navigate to={{ pathname: pathnames.LOGIN, search: 'next=' + location.pathname }} />
	);
};

export default App;
