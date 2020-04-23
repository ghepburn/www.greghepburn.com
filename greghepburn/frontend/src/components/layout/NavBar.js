import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export class NavBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			showNav: false
		}

		this.toggleNav = this.toggleNav.bind(this)
	}

	toggleNav(){
		this.setState(state => ({
			showNav: !state.showNav
		}));
	}


	render() {

		return (

			<nav className="main-nav">
				<div className="logo">
					<Link to="/">
						<a>Greg Hepburn</a>
					</Link>
				</div>
				<ul className = {`nav-links ${this.state.showNav ? "" : "nav-deactive"}`}>
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
						<Link to="/resume">
							<a>Resume</a>
						</Link>
					</li>
					<li>
						<Link to="/about">
							<a>About</a>
						</Link>
					</li>
				</ul>
				<div className="burger" onClick={this.toggleNav}>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</nav>


		);
	}
};

export default NavBar