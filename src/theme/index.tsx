import { createTheme, ThemeProvider } from '@mui/material/styles';
import components from './components';
import palette from './palette';

interface IProps {
	children: React.ReactNode;
}

const theme = createTheme({
	components,
	palette,
});

const MuiTheme = (props: IProps) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;

export default MuiTheme;
