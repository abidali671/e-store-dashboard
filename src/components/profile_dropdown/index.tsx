import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import avatar from '@assests/Rectangle16.png';
import { Box } from '@mui/material';
import { useDispatch } from 'src/hooks';
import { logout } from 'src/features/auth/auth.slice';

interface BasicMenuProps {
	items: { label: string; route?: string }[];
	buttonName?: string;
}

export default function ProfileDropdown({ items, buttonName }: BasicMenuProps) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (route: string) => {
		navigate(route);
		handleClose();
	};

	return (
		<div>
			<Button
				id='profile-button'
				aria-controls={open ? 'profile-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				{buttonName ? (
					buttonName
				) : (
					<Box
						component='img'
						sx={{
							height: 25,
						}}
						alt='avatar'
						src={avatar}
					/>
				)}
			</Button>
			<Menu
				id='profile-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'profile-button',
				}}
			>
				{items.map((item, index) => (
					<MenuItem
						key={index}
						onClick={() => {
							handleMenuItemClick(item.route);
							item.label === 'Logout' ? dispatch(logout()) : null;
						}}
					>
						{item.label}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
