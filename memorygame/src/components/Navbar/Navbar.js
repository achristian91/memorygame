import React from "react";
import "./Navbar.css";

function Navbar(props) {
	return (
		<div className="navbar-fixed">
			<nav class="navBar">
				<div className="nav-wrapper container">
					<a href="/" id='navTitle' className='brand-logo center'>Luxury Car Memory Game</a>
					<ul className='right'>
						<li style={{ paddingRight: "20px" }}>Score: {props.score}</li>
						<li style={{ paddingLeft: "20px" }}>Top Score: {props.topScore}</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}



export default Navbar;