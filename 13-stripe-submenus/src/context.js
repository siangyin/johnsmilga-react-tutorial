import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export function AppProvider({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

	function openSidebar() {
		setIsSidebarOpen(true);
	}
	function closeSidebar() {
		setIsSidebarOpen(false);
	}

	function openSubmenu() {
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
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useGlobalContext() {
	return useContext(AppContext);
}
