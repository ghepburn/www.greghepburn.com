import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HomeAbout extends Component {
	
	render() {

		return (
			<section id="section-a" className="grid">
				<div className="content-wrap">
					<div className="content-text">
						<p className="heavy-message">Hi!  My name is Greg Hepburn and I am a self-taught Python Developer.</p>
						<p className="heavy-message">
							I fell in love with coding because it challenges my thinking, patience, and resilience.
							It facillitates self improvment, which I can measure and feel from one project to the next.
						</p>
					</div>
				</div>
			</section>

		);
	}
};

export default HomeAbout
