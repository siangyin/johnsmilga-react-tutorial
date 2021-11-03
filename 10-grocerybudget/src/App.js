import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
	const [name, setName] = useState("");
	const [list, setList] = useState([]);
	const [isEditing, setEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

	function handleSubmit(e) {
		e.preventDefault();
		if (!name) {
			// if name not empty display alert
		} else if (name && isEditing) {
			// deal with editing
		} else {
			// show alert
		}
		setList((prev) => {
			[name, ...prev];
		});
		console.log(list);
	}
	return (
		<section className="section-center">
			<form onSubmit={handleSubmit} className="grocery-form">
				{alert.show && <Alert />}
				<h3>grocery budget</h3>

				<div className="form-control">
					<input
						type="text"
						className="grocery"
						placeholder="e.g. eggs"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					></input>
					<button type="submit" className="submit-btn">
						{isEditing ? "edit" : "submit"}
					</button>
				</div>
			</form>

			<div className="grocery-container">
				<List />
				<button className="clear-btn">clear items</button>
			</div>
		</section>
	);
}

export default App;
