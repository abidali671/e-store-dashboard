import { SxProps } from '@mui/material';
import React from 'react';

export type ComponentT = React.FC<PropsT>;

export interface PropsT {
	children: React.ReactNode;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	sx?: SxProps;
}
