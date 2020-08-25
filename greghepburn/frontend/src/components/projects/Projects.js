import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProjectTitleBanner from './projectBanners/ProjectTitleBanner';
import FeaturedProjectsBanner from './projectBanners/FeaturedProjectsBanner';
import ProjectFilterBanner from './projectBanners/ProjectFilterBanner';
import AllProjects from "./projectBanners/projectContent/AllProjects";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Projects extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ProjectTitleBanner />
				<FeaturedProjectsBanner projects={this.props.projects}/>
				<AllProjects projects={this.props.projects}/>
			</div>
		);
	}
};

export default Projects
