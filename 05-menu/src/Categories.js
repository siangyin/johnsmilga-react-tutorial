import React from "react";

const Categories = ({ categories, filterItems }) => {
	return (
		<div className="btn-container">
			{categories.map((category, i) => {
				return (
					<button
						type="button"
						key={i}
						className="filter-btn"
						onClick={() => {
							console.log(category);
							filterItems(category);
						}}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
