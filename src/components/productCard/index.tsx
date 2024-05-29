import { Box, Link, Typography } from '@mui/material';
import Shirt from '@assests/bag.png';
import * as styles from './productCard.style';
import { Link as RouterLink } from 'react-router-dom';

interface ProductCardProps {
	title: string;
	price: string;
	id: string;
	slug: string;
}

const ProductCard = ({ title, price = '200', id, slug }: ProductCardProps) => {
	console.log(slug, price, 'id, slug');

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
				<Link
					component={RouterLink}
					to={`/product-detail/${slug}`}
					style={{ textDecoration: 'none', color: 'black' }}
				>
					<Typography variant='body2' fontSize={20} fontWeight='bold'>
						{price}
					</Typography>
				</Link>
			</Box>
		</Box>
	);
};

export default ProductCard;
