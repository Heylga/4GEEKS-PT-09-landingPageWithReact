import React from "react";

//create your first component
const Footer = () => {
	return (
		<div className="footer container-expand my-5">
			<footer className="bg-dark expand text-center text-white py-4">
				<div className="text-center p-3">
					Copyright © Your Website 2022
					<a className="text-white" href="#"></a>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
