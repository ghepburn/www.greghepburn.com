import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class TitleBanner extends Component {
	
	render() {

		return (
			<header id="titlebanner" className="grid">
				<div className="bg-image home-title-image"></div>
				<div className="content-wrap">
					<h1>SOFTWARE DEVELOPER</h1>
				</div>
			</header>

		);
	}
};

export default TitleBanner
