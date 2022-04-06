import React from "react";
import ReactDOM from "react-dom";

const Jumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid ">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
			<div className="my-4">
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action
				</a>
			</div>
		</div>
	);
};

export default Jumbotron;
