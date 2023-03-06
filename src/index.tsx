import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MuiTheme from './theme';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<MuiTheme>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MuiTheme>,
);
