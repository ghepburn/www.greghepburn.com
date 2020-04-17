import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProjectBanner from './ProjectBanner';
import FeaturedProjectsBanner from './FeaturedProjectsBanner';
import SortFilterBanner from './SortFilterBanner';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Projects extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ProjectBanner image={this.props.image} />
				<FeaturedProjectsBanner projects={this.props.projects}/>
				<SortFilterBanner projects={this.props.projects}/>
			</div>
		);
	}
};

export default Projects