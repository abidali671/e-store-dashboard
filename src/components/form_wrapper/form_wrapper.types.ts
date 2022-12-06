import React from 'react';

export type ComponentT = React.FC<PropsT>;

export interface PropsT {
	children: React.ReactNode;
}
