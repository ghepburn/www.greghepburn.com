import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Footer extends Component {
	render() {
		return (
			
			<nav className="navbar navbar-dark bg-dark">
				
				<div className="container">
					<div className="row pt-3 pb-3">
						<div className="col-4 m-auto">
							<a className="nav-link text-white" href="/">Home</a>
						</div>
						<div className="col-4 m-auto">
							<a className="nav-link text-white" href="/projects">Projects</a>
						</div>
						<div className="col-4 m-auto">
							<a className="nav-link text-white" href="/about">About</a>
						</div>
					</div>
				</div>
				
			</nav>

		);
	}
};

export default Footer