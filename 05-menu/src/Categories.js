import React from "react";

const Categories = ({ categories, filterItems }) => {
	return (
		<div className="btn-container">
			{categories.map((cat, i) => {
				return (
					<button
						type="button"
						key={i}
						className="filter-btn"
						onClick={() => {
							console.log(cat);
							filterItems({ cat });
						}}
					>
						{cat}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
