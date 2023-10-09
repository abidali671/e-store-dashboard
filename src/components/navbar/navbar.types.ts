import React from 'react';
import * as types from '@components/container/container.types';

interface NavbarPropsT {
	isSearchBar?: boolean;
	toggleSidebar?: (type: types.TogglerType) => void;
	isNav: boolean;
}

export type ComponentT = React.FC<NavbarPropsT>;
