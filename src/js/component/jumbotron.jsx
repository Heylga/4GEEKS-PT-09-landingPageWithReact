import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	return (
		<div class="jumbotron m-5">
			<h1 class="display-4">{props.title}</h1>
			<p class="lead">{props.description}</p>
			<a
				class="btn btn-primary btn-lg"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}{" "}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

ReactDOM.render(
	<Jumbotron
		title="A Warm Welcome!"
		description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		buttonLabel="Call to action"
		buttonURL="https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2014/07/cat81.jpg?w=334&h=334&crop=1&ssl=1"
	/>,

	document.querySelector("#app")
);

export default Jumbotron;
