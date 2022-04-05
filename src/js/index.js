//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/navbar.jsx";
import Container from "./component/container.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";
import Footer from "./component/footer.jsx";

//render your react application
ReactDOM.render(<Card />, document.querySelector("#app"));
