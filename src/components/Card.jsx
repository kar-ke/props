import React from "react";
import "./card.css";
function Card(props){
    return (
		<div className="card">
			<div className="head">
				<h1>{props.name}</h1>
				<img src={props.imgURL} alt="avatar" />
			</div>
			<div className="foot">
				<p>{props.phone}</p>
				<p>{props.email}</p>
			</div>
		</div>
	);
}
export default Card;