import React, { useState } from "react";
import data from "./data";

function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		let num = parseInt(count);
		if (count <= 0) {
			num = 1;
		}
		if (count > 8) {
			num = 8;
		}
		console.log(` ${count} submitted`);
		setText(data.slice(0, num));
	}
	return (
		<section className="section-center">
			<h3>Tired of boring lorem ipsum?</h3>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="amount">Paragraphs:</label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={count}
					onChange={(e) => {
						setCount(e.target.value);
					}}
				></input>
				<button type="submit" className="btn">
					generate
				</button>
			</form>
			<article className="lorem-text">
				{text.map((item, i) => {
					return <p key={i}>{item}</p>;
				})}
			</article>
		</section>
	);
}

export default App;
