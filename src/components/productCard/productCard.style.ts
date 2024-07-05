export const mainProduct = {
	display: 'grid',
	width: '100%',
	gridTemplateColumns: {
		lg: 'repeat(4, 1fr)',
		md: 'repeat(3, 1fr)',
		sm: 'repeat(2, 1fr)',
		xs: '1fr',
	},
	gap: 3,
	pt: 3,
};
export const card = { border: '1px solid', borderColor: 'gray.50', borderRadius: '20px' };
export const cardContent = {
	borderTop: '1px solid',
	borderColor: 'gray.50',
	px: '40px',
	py: '10px',
};
