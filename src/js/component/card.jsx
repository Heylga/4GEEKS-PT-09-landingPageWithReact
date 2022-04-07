import React from "react";
import ReactDOM from "react-dom";

const Card = () => {
	return (
		<div className="card my-4" style={{ width: "18rem" }}>
			<img src="https://dummyimage.com/500x325/cccccc/827f82" />
			<div className="card-body mt-2 mb-4">
				<h3 className="card-title text-center fw-bolder">Card title</h3>
				<p
					className="card-text text-center"
					style={{ fontSize: "large" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Sapiente esse necessitatibus neque.
				</p>
			</div>
			<div className="bg-light py-3 text-center">
				<a href="#" className="btn btn-primary ">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export default Card;

/*const Card = (props) => {
	const card = props.card;
	return card.map((index) => {
		//const Card = () => {
		return (
			<div className="container col-8">
				<div className="card my-4" style={{ width: "18rem" }}>
					<img src={index.imageUrl} />
					<div className="card-body mt-2 mb-4">
						<h3 className="card-title text-center fw-bolder">
							{index.title}
						</h3>
						<p
							className="card-text text-center"
							style={{ fontSize: "large" }}>
							{index.description}
						</p>
					</div>
					<div className="bg-light py-3 text-center">
						<a href="#" className="btn btn-primary ">
							{index.buttonLabel}
						</a>
					</div>
				</div>
			</div>
		);
	});
};

Card.propTypes = {
	imageUrl: PropType.string,
	title: PropType.string,
	description: PropType.string,
	buttonLabel: PropType.string,
};

const list = [
	{
		title: "Card title",
		imageUrl: "https://dummyimage.com/500x325/cccccc/827f82",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.",
		buttonLabel: "Find Out More!",
	},
	{
		title: "Card title",
		imageUrl: "https://dummyimage.com/500x325/cccccc/827f82",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magno sapiente, tempore debitis beatae culpa natus architecto.",
		buttonLabel: "Find Out More!",
	},
	{
		title: "Card title",
		imageUrl: "https://dummyimage.com/500x325/cccccc/827f82",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.",
		buttonLabel: "Find Out More!",
	},
	{
		title: "Card title",
		imageUrl: "https://dummyimage.com/500x325/cccccc/827f82",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magno sapiente, tempore debitis beatae culpa natus architecto.",
		buttonLabel: "Find Out More!",
	},
];
ReactDOM.render(<Card card={list} />, document.querySelector("#app"));*/
