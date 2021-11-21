import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
	const {
		isSubmenuOpen,
		location,
		page: { page, links },
	} = useGlobalContext();

	const container = useRef(null);
	const [columns, setColumns] = useState("col-2");

	useEffect(() => {
		setColumns("col-2");
		const submenu = container.current;
		const { centerpoint, bottompoint } = location;
		submenu.style.left = `${centerpoint}px`;
		submenu.style.top = `${bottompoint}px`;

		if (links.length === 3) {
			setColumns("col-3");
		} else if (links.length > 3) {
			setColumns("col-4");
		}
	}, [location, links]);

	return (
		<aside
			className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
			ref={container}
		>
			<h4>{page}</h4>
			<div className={`submenu-center ${columns}`}>
				{links.map((link, i) => {
					const { label, icon, url } = link;
					return (
						<a key={i} href={url}>
							{icon}
							{label}
						</a>
					);
				})}{" "}
			</div>
		</aside>
	);
};

export default Submenu;
