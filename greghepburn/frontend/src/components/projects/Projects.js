import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProjectTitleBanner from './projectBanners/ProjectTitleBanner';
import FeaturedProjectsBanner from './projectBanners/FeaturedProjectsBanner';
import ProjectFilterBanner from './projectBanners/ProjectFilterBanner';
import AllProjects from "./projectBanners/projectContent/AllProjects";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Projects extends Component {

	render() {

		const bestProject = this.props.projects.filter(project => project.title.toLowerCase() == "girlfriend getaways full-stack website")[0];

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
