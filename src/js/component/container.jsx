import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

const Container = () => {
	return (
		<div className="container col-8">
			<div className="bg-light pb-5 px-4">
				<Jumbotron />
			</div>
			<div
				className="d-flex gap-1"
				style={{
					justifyContent: "space-between",
				}}>
				<Card /> <Card /> <Card /> <Card />
			</div>
		</div>
	);
};

export default Container;
