import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors';
import Button from '@mui/material/Button';

declare module '@mui/material/styles' {
	interface PaletteOptions {
		green: {
			[key: number]: string;
		};

		white: {
			[key: number]: string;
		};
		red: {
			[key: number]: string;
		};
		blue: {
			[key: number]: string;
		};
		gray: {
			[key: number]: string;
		};
		violet: {
			[key: number]: string;
		};
		orange: {
			[key: number]: string;
		};
	}
}
export const theme = createTheme({
	palette: {
		green: {
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
		},
		white: {
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
		},
		red: {
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
		},
		blue: {
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
		},
		gray: {
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
		},
		violet: {
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
		},
		orange: {
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
		},
	},
});
