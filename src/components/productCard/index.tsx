import { Box, Typography } from '@mui/material';
import Shirt from '@assests/bag.png';
import * as styles from './productCard.style';
import { Link } from 'react-router-dom';

interface ProductCardProps {
	title: string;
	price: string;
	id: string;
}

const ProductCard = ({ title, price, id }: ProductCardProps) => {
	return (
		<Box sx={styles.card}>
			<Box
				component='img'
				src={Shirt}
				sx={{ width: '100%', objectFit: 'contain', borderRadius: '20px 20px 0px 0px' }}
			/>
			<Box sx={styles.cardContent}>
				<Typography variant='body1' fontSize={20} color='gray.400'>
					{title}
				</Typography>
				<Link to={`/product-detail/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
					<Typography variant='body2' fontSize={20} fontWeight='bold'>
						{price}
					</Typography>
				</Link>
			</Box>
		</Box>
	);
};

export default ProductCard;
