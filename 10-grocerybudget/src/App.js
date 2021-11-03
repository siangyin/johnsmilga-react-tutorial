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
			showAlert(true, "danger", "please enter value");
		} else if (name && isEditing) {
			setList(
				list.map((item) => {
					if (item.id === editID) {
						return { ...item, title: name };
					}
					return item;
				})
			);
			setName("");
			setEditID(null);
			setEditing(false);
			showAlert(true, "success", "value changed");
		} else {
			showAlert(true, "success", "item added to the list");
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([...list, newItem]);
			setName("");
		}
	}

	function showAlert(show = false, type = "", msg = "") {
		setAlert({ show, type, msg });
	}

	function clearList() {
		showAlert(true, "danger", "empty list");
		setList([]);
	}

	function removeItem(id) {
		showAlert(true, "danger", "remove item");
		setList(list.filter((item) => item.id !== id));
	}

	function editItem(id) {
		const specificItem = list.find((item) => item.id === id);
		setEditing(true);
		setEditID(id);
		console.log(specificItem);
		setName(specificItem.title);
	}

	return (
		<section className="section-center">
			<form onSubmit={handleSubmit} className="grocery-form">
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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

			{list.length > 0 && (
				<div className="grocery-container">
					<List items={list} removeItem={removeItem} editItem={editItem} />
					<button className="clear-btn" onClick={clearList}>
						clear items
					</button>
				</div>
			)}
		</section>
	);
}

export default App;
