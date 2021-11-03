import React, { useState, useContext } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	function openSideBar() {
		setIsSidebarOpen(true);
	}

	function closeSideBar() {
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
				isSidebarOpen,
				isModalOpen,
				openSideBar,
				closeSideBar,
				openModal,
				closeModal,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

//customhook
export function useGlobalContext() {
	return useContext(AppContext);
}

export { AppContext, AppProvider };
