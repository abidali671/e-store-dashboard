import React from 'react';
import { Box, Typography } from '@mui/material';
import * as styles from './card.styles';

const Card: React.FC<{ title: string; footer?: string; children: React.ReactNode }> = ({
	title,
	footer,
	children,
}) => {
	return (
		<Box sx={styles.root}>
			<Box sx={styles.headerWrapper}>
				<Typography variant='body1' sx={styles.title}>
					{title}
				</Typography>
			</Box>
			<Box sx={styles.contentWrapper}>{children}</Box>
			{footer && (
				<Box sx={styles.footerWrapper}>
					<Typography variant='body1' sx={styles.footerLink}>
						{footer}
					</Typography>
				</Box>
			)}
		</Box>
	);
};

export default Card;
