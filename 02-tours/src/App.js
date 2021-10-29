import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	function removeTour(id) {
		const newData = tours.filter((tour) => tour.id !== id);
		setTours(newData);
	}

	async function fetchTours() {
		setLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			setLoading(false);
			setTours(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}

	useEffect(() => {
		console.log(`rendering`);
		fetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}
	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} fetchTours={fetchTours} />
		</main>
	);
}

export default App;
