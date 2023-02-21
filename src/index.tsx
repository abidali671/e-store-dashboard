import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@components/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>,
);
