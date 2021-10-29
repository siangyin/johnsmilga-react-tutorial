import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = people[index];

	function checkNum(i) {
		if (i < 0) {
			return people.length - 1;
		} else if (i > people.length - 1) {
			return 0;
		} else {
			return i;
		}
	}

	function nextPerson() {
		setIndex((index) => {
			let i = index + 1;
			return checkNum(i);
		});
	}

	function prevPerson() {
		setIndex((index) => {
			let i = index - 1;
			return checkNum(i);
		});
	}

	function randomPerson() {
		setIndex(() => {
			let i = Math.floor(Math.random() * people.length);
			if (i === index) {
				return checkNum((i += 1));
			}
			return i;
		});
	}

	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="button-container">
				<button className="prev-btn" onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={nextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn" onClick={randomPerson}>
				Suprise me
			</button>
		</article>
	);
};

export default Review;
