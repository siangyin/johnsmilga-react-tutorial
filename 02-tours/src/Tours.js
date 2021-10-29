import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour, fetchTours }) => {
	if (tours.length === 0) {
		return (
			<div className="title">
				<h2>no tours left</h2>
				<button className="btn" onClick={fetchTours}>
					Refresh
				</button>
			</div>
		);
	}
	return (
		<section>
			<div className="title">
				<h2>Our Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
				})}
			</div>
		</section>
	);
};

export default Tours;
