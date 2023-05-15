import React from 'react';
import * as types from './container.types';

const useContainer = () => {
	const [isCollapsed, setIsCollapsed] = React.useState<types.CollapsedStateT>({
		desktop: false,
		mobile: true,
	});

	const toggleSidebar = (type: types.TogglerType) => {
		setIsCollapsed({ ...isCollapsed, [type]: !isCollapsed[type] });
	};

	return { isCollapsed, toggleSidebar };
};

export default useContainer;
