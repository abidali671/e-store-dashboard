import App from './App';
import store from './store';
import MuiTheme from './theme';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		<MuiTheme>
			<BrowserRouter>
				<App />
				<ToastContainer />
			</BrowserRouter>
		</MuiTheme>
	</Provider>,
);
