import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HomeAbout extends Component {
	
	render() {

		return (
			<section id="section-a" className="grid">
				<div className="content-wrap">
					<div className="content-text">
						<p className="heavy-message">Hi!  My name is Greg Hepburn and I am a self-taught Software Developer.</p>
						<p className="heavy-message">
							I am a consistent and reliable junior developer who can listen, communicate, adapt, and take initiative to tackle challenges.  Check out my projects for a sample of my technical skills!.
						</p>
					</div>
				</div>
			</section>

		);
	}
};

export default HomeAbout
