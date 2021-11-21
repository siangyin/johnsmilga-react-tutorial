import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

function AppProvider({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(true);

	function openSidebar() {
		setIsSidebarOpen(true);
	}
	function closeSidebar() {
		setIsSidebarOpen(false);
	}

	function openModal() {
		setIsModalOpen(true);
	}
	function closeModal() {
		setIsModalOpen(false);
	}

	return (
		<AppContext.Provider
			value={{
				isModalOpen,
				isSidebarOpen,
				openModal,
				closeModal,
				openSidebar,
				closeSidebar,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
