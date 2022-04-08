//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Main from "../js/View/Main.jsx";
import Navbar from "../js/component/navbar.jsx";
import Container from "./component/container.jsx";
import Jumbotron from "../js/component/jumbotron.jsx";
import Card from "../js/component/card.jsx";
import Footer from "../js/component/footer.jsx";
import ListCards from "../js/component/listCards.jsx";

//render your react application
ReactDOM.render(
	<>
		{" "}
		<Main /> <Navbar /> <Container /> <Footer />{" "}
	</>,
	document.querySelector("#app")
);
