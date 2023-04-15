export const sideListWrapper = {
	width: '100%',
	height: '100%',
	// bgcolor: 'background.paper',
	borderRight: '1px solid #ddd',
	position: 'relative',
	// overflowY: 'auto',

	display: { md: 'block', },
};

export const collapseBtn = {
	width: '30px',
	borderTopRightRadius: '30px',
	borderBottomRightRadius: '30px',
	display: { md: 'flex', xs: 'none' },
	justifyContent: 'center',
	// display:'flex',
	alignItems: 'center',
	position: 'absolute',
	top: '35%',
	height: '200px',
	left: '60px',
	backgroundColor: 'blue.300',
	cursor: 'pointer',
	transition: '0.5s',
};

export const collapsedBtn = {
	width: '30px',
	borderTopRightRadius: '30px',
	borderBottomRightRadius: '30px',
	display: { md: 'flex', xs: 'none' },
	justifyContent: 'center',
	// display:'flex',
	alignItems: 'center',
	position: 'fixed',
	top: '35%',
	height: '200px',
	left: '300px',
	backgroundColor: 'blue.300',
	cursor: 'pointer',
	transition: '0.5s',
};

export const select = {
	height: '40px',
	width: '8px',
	borderRadius: '20px',
	backgroundColor: '#86AAF1',
	position: 'absolute',
	left: '2px',
};
