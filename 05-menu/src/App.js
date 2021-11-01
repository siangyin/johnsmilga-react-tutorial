import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
//get unique categories
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
//will result : ['all', 'breakfast', 'lunch', 'shakes']

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState([]);

	const filterItems = (category) => {
		if (category === "all") {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<main>
			<section className="menu-selection">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
