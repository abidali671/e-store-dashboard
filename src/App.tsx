import React from 'react';
import {
	Login,
	Register,
	Dashboard,
	Vendors,
	Categories,
	Products,
	AddProduct,
	ForgetPassword,
	ResetPassword,
	VendorProfile,
	EditCategory,
} from './pages';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ProductOverview } from '@components';
import { pathnames } from '@types';
import { useSelector } from './hooks';
import Order from './pages/order';
import Verify from './pages/auth/verified';
import AddCategory from './pages/addCategory';

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
				path={`${pathnames.PRODUCT_DETAIL}/:id`}
				element={
					<ProtectedRoute>
						<ProductOverview />
					</ProtectedRoute>
				}
			/>
			<Route
				path={`${pathnames.VENDORS}/:id`}
				element={
					<ProtectedRoute>
						<VendorProfile />
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
