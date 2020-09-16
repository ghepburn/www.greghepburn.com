import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TitleBanner from './homeContent/TitleBanner';
import HomeAbout from './homeContent/HomeAbout';
import HomeProjects from './homeContent/HomeProjects';
import HomeContact from './homeContent/HomeContact';

export class Home extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<body>
				<TitleBanner />
				<HomeAbout />
				<HomeProjects />
				<hr className="hline" />
				<HomeContact />
			</body	>
		);
	}
};

export default Home
