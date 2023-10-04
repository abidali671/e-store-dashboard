export const root = {
	width: '100%',
	height: 'auto',
	border: '1px solid',
	borderColor: 'gray.100',
	borderRadius: '16px',
	display: 'flex',
	flexDirection: 'column',
};

export const headerWrapper = {
	height: '48px',
	px: '16px',
	display: 'flex',
	alignItems: 'center',
	borderBottom: '1px solid',
	borderColor: 'gray.100',
};

export const footerWrapper = {
	height: '48px',
	px: '16px',
	display: 'flex',
	alignItems: 'center',
	borderTop: '1px solid',
	borderColor: 'gray.100',
	marginTop: 'auto',
};

export const contentWrapper = {
	display: 'flex',
	alignItems: 'center',
	'&>*': {
		maxHeight: '100%',
		width: '100%',
	},
};

export const footerLink = {
	fontWeight: 500,
	color: 'blue.400',
};

export const title = {
	fontWeight: 600,
	color: 'gray.400',
	width: '100%',
};
