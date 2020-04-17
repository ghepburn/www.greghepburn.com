import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export class NavBar extends Component {
	render() {
		return (

			<nav>
				<div className="logo">
					<Link to="/">
						<a>Greg Hepburn</a>
					</Link>
				</div>
				<ul className="nav-links">
					<li>
						<Link to="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link to="/projects">
							<a>Projects</a>
						</Link>
					</li>
					<li>
						<Link to="/about">
							<a>About</a>
						</Link>
					</li>
				</ul>
				<div className="burger">
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</nav>


		);
	}
};

export default NavBar