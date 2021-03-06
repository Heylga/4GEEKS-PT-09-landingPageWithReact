import React from "react";
import PropTypes from "prop-types";
import Card from "./card.jsx";

const listCards = () => {
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
	const listOfCards = list.map((cardItem) => {
		return (
			<Card
				title={cardItem.title}
				imageUrl={cardItem.imageUrl}
				description={cardItem.description}
				buttonLabel={cardItem.buttonLabel}
			/>
		);
	});
	return (
		<div
			className="d-flex gap-2"
			style={{
				justifyContent: "space-between",
			}}>
			{" "}
			{listOfCards}{" "}
		</div>
	);
};

export default listCards;
