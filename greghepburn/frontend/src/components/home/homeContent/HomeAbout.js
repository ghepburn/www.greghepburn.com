import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class HomeAbout extends Component {
	
	render() {

		return (
			<section id="section-a" className="grid">
				<div className="content-wrap">
					<h2 className="content-title">Greg's Mission</h2>
					<div className="content-text">
						<p>My name is Greg Hepburn and I am a self-taught Python Developer.</p>
						<p>I have a degree, but it is not in computer science.  
						I beleive my career path shows my passion, independence, and attitude. 
						I am on a mission to become a professional in the programming industry and to be an example for others who feel discouraged about entering into a field which they have no formal education in.</p>
					</div>
				</div>
			</section>

		);
	}
};

export default HomeAbout