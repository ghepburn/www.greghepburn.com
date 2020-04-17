import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg } from 'reactstrap';
import AboutTitleBanner from './aboutBanners/AboutTitleBanner.js';
import IntroductionBanner from './aboutBanners/IntroductionBanner';

export class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myProfile: []
		};
	};

	componentDidMount() {
		fetch("http://172.105.24.31/api/profile")
		.then(results => results.json())
		.then((data) => {
			this.setState({ myProfile: data.results });
			console.log(this.state.myProfile);
		})
	}

	render() {
		return (
			<div>
				<AboutTitleBanner whiteboard_img={this.props.image} selfie={this.props.selfie_image}/>
				<IntroductionBanner selfie_image={this.props.selfie_image} myProfile={this.state.myProfile}/>
			</div>
		);
	}
};

export default About
