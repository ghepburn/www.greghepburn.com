import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HomeAbout extends Component {
	
	render() {

		return (
			<section id="section-a" className="grid">
				<div className="content-wrap">
					<div className="content-text written-message">
						<p className="heavy-message">Hi!   My name is Greg Hepburn and I am a self-taught Python Developer.</p>
						<p>My mission is to become a professional in the programming industry, and to act as an example for others, who feel discouraged about entering into a career field which they have no formal education in.</p>
					</div>
				</div>
			</section>

		);
	}
};

export default HomeAbout
