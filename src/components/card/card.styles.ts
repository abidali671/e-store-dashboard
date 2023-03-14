export const root = {
	width: '100%',
	height: '100%',
	border: '1px solid',
	borderColor: 'gray.100',
	borderRadius: '16px',
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
};

export const contentWrapper = {
	// height: 'auto',
	py: '16px',

	display: 'flex',
	alignItems: 'center',
	'&>*': {
		height: 'auto',
		width: '100%'
	}
};

export const footerLink = {
	fontWeight: 500,
	color: 'blue.400',
};

export const title = {
	fontWeight: 500,
	color: 'gray.400',
};
