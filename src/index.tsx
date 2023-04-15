import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MuiTheme from './theme';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		<MuiTheme>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MuiTheme>
	</Provider>,
);
