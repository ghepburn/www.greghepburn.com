import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HomeContact extends Component {
	
	render() {

		return (
			<section id="section-c" className="grid contact">
				<div className="box">
					<h2 className="content-title">Contact Me Today</h2>
					<ul>
						<li>Greg Hepburn</li>
						<li>ghepburn@hotmail.ca</li>
						<li>Toronto, Ontario</li>
					</ul>  
				</div>
			</section>
		);
	}
};

export default HomeContact
