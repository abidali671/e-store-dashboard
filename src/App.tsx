import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { AuthContainer } from './components';

const App: React.FC = () => {
	return (
		<Routes>
			<Route
				path='/login'
				element={
					<AuthContainer>
						<Login />
					</AuthContainer>
				}
			/>
			<Route
				path='/register'
				element={
					<AuthContainer>
						<Login />
					</AuthContainer>
				}
			/>
		</Routes>
	);
};

export default App;
