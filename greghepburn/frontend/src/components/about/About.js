import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg } from 'reactstrap';
import AboutTitleBanner from './aboutBanners/AboutTitleBanner.js';
import IntroductionBanner from './aboutBanners/IntroductionBanner';

export class About extends Component {
	constructor(props) {
		super(props);
	};

	componentDidMount() {
		fetch("http://www.greghepburn.com/api/profile")
		.then(results => results.json())
		.then((data) => {
			this.setState({ myProfile: data.results });
			console.log(this.state.myProfile);
		})
	}

	render() {
		return (
			<div>
				<AboutTitleBanner />
				<IntroductionBanner />
			</div>
		);
	}
};

export default About
