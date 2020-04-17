import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

export class AboutTitleBanner extends Component {

	render() {
		return (
			<header id="titlebanner" className="grid">
				<div className="bg-image"></div>
				<div className="content-wrap">
					<h1>About Greg</h1>
				</div>
			</header>
		);
	}
};

export default AboutTitleBanner