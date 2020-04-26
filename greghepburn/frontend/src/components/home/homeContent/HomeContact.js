import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HomeContact extends Component {
	
	render() {

		return (
			<section id="section-c" className="grid contact">
				<div className="box pb-4 mb-5">
					<h2 className="content-title">Contact Me Today</h2>
					<p>
						Greg Hepburn
						<br></br>
						ghepburn@hotmail.ca
						<br></br>
						Toronto, Ontario
						<br></br>
						<a href="https://www.linkedin.com/in/greg-hepburn-0289a5179/">LinkedIn</a>
						<br></br>
						<a href="https://github.com/ghepburn">GitHub</a>
					</p>  
				</div>
			</section>
		);
	}
};

export default HomeContact
