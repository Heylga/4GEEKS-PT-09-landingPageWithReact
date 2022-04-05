import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import rigoImage from "../../img/size.png";

const data = {
	image: "../../img/size.png",
	cardTitle: "Card Title",
	cardDescription:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	buttonLabel: "Find Out More!",
	buttonURL: "#",
};

const content = (props) => {
	return (
		<div className="card m-5">
			<img src={data.image} />
			<div className="card-body">
				<h5 className="card-title">{data.cardTitle}</h5>
				<p className="card-text">{data.cardDescription}</p>
				<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}{" "}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	cardTitle: PropTypes.string,
	cardDescription: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

export default Card;
