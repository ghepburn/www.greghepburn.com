import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProjectTitleBanner from './projectBanners/ProjectTitleBanner';
import FeaturedProjectsBanner from './projectBanners/FeaturedProjectsBanner';
import ProjectFilterBanner from './projectBanners/ProjectFilterBanner';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Projects extends Component {

	constructor(props) {
		super(props);
		this.state={
			filter: "False"
		}
	}

	render() {
		return (
			<div>
				<ProjectTitleBanner image={this.props.image} />
				<FeaturedProjectsBanner projects={this.props.projects}/>
				<ProjectFilterBanner projects={this.props.projects}/>
			</div>
		);
	}
};

export default Projects