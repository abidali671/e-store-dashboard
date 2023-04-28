import { Box, Typography } from '@mui/material';
import Shirt from '@assests/bag.png';
import * as styles from './productCard.style';

interface ProductCardProps {
	title: string;
	price: string;
}

const ProductCard = ({ title, price }: ProductCardProps) => {
	return (
		<Box sx={styles.card}>
			<Box
				component='img'
				src={Shirt}
				sx={{ width: '100%', objectFit: 'contain', borderRadius: '20px 20px 0px 0px' }}
			/>
			<Box sx={styles.cardContent}>
				<Typography variant='body1' color='gray.400'>
					{title}
				</Typography>
				<Typography variant='body2' fontWeight='bold'>
					{price}
				</Typography>
			</Box>
		</Box>
	);
};

export default ProductCard;
