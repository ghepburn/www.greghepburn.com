import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class ProjectTitleBanner extends Component {
	
	render() {

		return (
			<header id="titlebanner" className="grid">
				<div className="bg-image projects-title-image"></div>
				<div className="content-wrap">
					<h1>My Projects</h1>
				</div>
			</header>

		);
	}
};

export default ProjectTitleBanner
