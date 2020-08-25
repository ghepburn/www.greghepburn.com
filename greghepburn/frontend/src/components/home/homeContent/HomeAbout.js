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
							I am experienced in developing full-stack applications and self-teaching myself languages, frameworks, concepts, and technologies.
						</p>
					</div>
				</div>
			</section>

		);
	}
};

export default HomeAbout
