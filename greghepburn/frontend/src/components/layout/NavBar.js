import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export class NavBar extends Component {
	render() {
		return (


			<nav className="navbar navbar-expand-lg fixed-top bg-dark">
				<div className="container">
					<Link to="/">
						<h3 className="mr-auto navbar-brand whiteText">Greg Hepburn</h3>
					</Link>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="nav text-uppercase ml-auto">
							<li className="nav-link">
								<Link to="/">
									<p className="whiteText">Home</p>
								</Link>
							</li>
							<li className="nav-link">
								<Link to="/projects">
									<p className="whiteText">Projects</p>
								</Link>
							</li>
							<li className="nav-link">
								<Link to="/about">
									<p className="whiteText">About</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>


		);
	}
};

export default NavBar