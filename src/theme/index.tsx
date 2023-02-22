import palette from './palette';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface IProps {
	children: React.ReactNode;
}

const theme = createTheme({
	palette,
});

const MuiTheme = (props: IProps) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;

export default MuiTheme;
