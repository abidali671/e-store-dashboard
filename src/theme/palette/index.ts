import { ColorPartial, PaletteOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
	interface PaletteOptions {
		green: ColorPartial;
		white: ColorPartial;
		red: ColorPartial;
		blue: ColorPartial;
		gray: ColorPartial;
		violet: ColorPartial;
		orange: ColorPartial;
	}
}

const green: ColorPartial = {
	50: '#e6fcf5',
	100: '#b0f6de',
	200: '#8af2cf',
	300: '#54ecb9',
	400: '#33e9ab',
	500: '#00e396',
	600: '#00cf89',
	700: '#00a16b',
	800: '#007d53',
	900: '#005f3f',
};

const white: ColorPartial = {
	50: '#ffffff',
	100: '#ffffff',
	200: '#ffffff',
	300: '#ffffff',
	400: '#ffffff',
	500: '#ffffff',
	600: '#e8e8e8',
	700: '#b5b5b5',
	800: '#8c8c8c',
	900: '#6b6b6b',
};

const red: ColorPartial = {
	50: '#fde9e9',
	100: '#f9baba',
	200: '#f79999',
	300: '#f36b6b',
	400: '#f14e4e',
	500: '#ed2222',
	600: '#d81f1f',
	700: '#a81818',
	800: '#821313',
	900: '#640e0e',
};

const blue: ColorPartial = {
	50: '#e7edfa',
	100: '#b4c8f0',
	200: '#90aee9',
	300: '#5d89df',
	400: '#3d72d9',
	500: '#0d4fcf',
	600: '#0c48bc',
	700: '#093893',
	800: '#072b72',
	900: '#052157',
};

const gray: ColorPartial = {
	50: '#ececed',
	100: '#c3c4c6',
	200: '#a5a7ab',
	300: '#7c7f84',
	400: '#63666d',
	500: '#3c4048',
	600: '#373a42',
	700: '#2b2d33',
	800: '#212328',
	900: '#191b1e ',
};

const violet: ColorPartial = {
	50: '#eeeeef',
	100: '#ccc9ce',
	200: '#b3afb6',
	300: '#908b94',
	400: '#7a7580',
	500: '#595260',
	600: '#514b57',
	700: '#3f3a44',
	800: '#312d35',
	900: '#252228 ',
};

const orange: ColorPartial = {
	50: '#fffbea',
	100: '#fef1bf',
	200: '#feeba0',
	300: '#fee274',
	400: '#fddc59',
	500: '#fdd330',
	600: '#e6c02c',
	700: '#b49622',
	800: '#8b741a',
	900: '#6a5914 ',
};

const palette: PaletteOptions = {
	green,
	white,
	red,
	blue,
	gray,
	violet,
	orange,
};

export default palette;
