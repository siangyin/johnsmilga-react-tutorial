import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export function AppProvider({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({});
	const [page, setPage] = useState({ page: "", links: [] });

	function openSidebar() {
		setIsSidebarOpen(true);
	}
	function closeSidebar() {
		setIsSidebarOpen(false);
	}

	function openSubmenu(text, coordinates) {
		const page = sublinks.find((link) => link.page === text)
		setPage(page)
		setLocation(coordinates);
		setIsSubmenuOpen(true);
	}
	function closeSubmenu() {
		setIsSubmenuOpen(false);
	}

	return (
		<AppContext.Provider
			value={{
				isSubmenuOpen,
				isSidebarOpen,
				openSubmenu,
				closeSubmenu,
				openSidebar,
				closeSidebar,
				location,
				page
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useGlobalContext() {
	return useContext(AppContext);
}
