import React from "react";

import Jumbotron from "./jumbotron.jsx";
import ListCards from "../component/listCards.jsx";

const Container = () => {
	return (
		<div className="container col-8">
			<div className="bg-light pb-5 px-4 rounded-bottom">
				<Jumbotron />
			</div>
			<div>
				<ListCards />
			</div>
		</div>
	);
};

export default Container;
