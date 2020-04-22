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
							I fell in love with coding because it continuously challenges me.  The feeling of tackling a difficult problem and finding success is addictive.  
							I enjoy being able to push myself, and to see improvements in my abilities.
						</p>
					</div>
				</div>
			</section>

		);
	}
};

export default HomeAbout
