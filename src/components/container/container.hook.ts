import React from 'react';

const useContainer = () => {
	const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	return { isCollapsed, toggleSidebar };
};

export default useContainer;
