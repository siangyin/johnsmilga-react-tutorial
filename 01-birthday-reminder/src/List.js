import React from "react";

const List = ({ people }) => {
	const listing = people.map((person) => {
		return (
			<article key={person.id} className="person">
				<img src={person.image} alt={person.name} />
				<div>
					<h4>{person.name}</h4>
					<p>{person.age}</p>
				</div>
			</article>
		);
	});

	return (
		<>
			<ul>{listing}</ul>
		</>
	);
};

export default List;
