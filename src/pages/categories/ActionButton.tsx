import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MoreOption } from '@assets/icons';
import { useState } from 'react';
import API from 'src/axios';
import { toast } from 'react-toastify';

export const ActionButton = ({ item }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();
	const handleEdit = () => {
		navigate(`/category/${item.slug}`);
	};

	const handleDelete = async () => {
		try {
			const res = await API.delete(`/api/category/${item.slug}`);
			toast.success(res.data.msg);
		} catch (error) {
			console.log(error);
		}
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box>
			<IconButton onClick={handleClick}>
				<MoreOption style={{ height: '20px', width: '20px' }} />
			</IconButton>
			<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem onClick={handleEdit}>Edit</MenuItem>
				<MenuItem onClick={handleDelete}>Delete</MenuItem>
			</Menu>
		</Box>
	);
};
