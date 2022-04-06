import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "../component/navbar.jsx";
import Jumbotron from "../component/jumbotron.jsx";
// import Card from "../component/card.jsx";
import Footer from "../component/footer.jsx";

//create your first component
const Main = () => {
	return (
		<div>
			<div className="Navbar"></div>
			<div className="Jumbotron"></div>
			{/* <div className="Card"></div> */}
			<div className="Footer"></div>
			{/* <h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */}
		</div>
	);
};

export default Main;
