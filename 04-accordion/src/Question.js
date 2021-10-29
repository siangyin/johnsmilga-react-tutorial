import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
	const [shwInfo, setShwInfo] = useState(false);
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button
					className="btn"
					onClick={() => {
						setShwInfo(!shwInfo);
					}}
				>
					{shwInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>

			{shwInfo && <p className="info">{info}</p>}
		</article>
	);
};

export default Question;
