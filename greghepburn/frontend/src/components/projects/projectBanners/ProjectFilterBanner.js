import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import AllProjects from './projectContent/AllProjects';

export class ProjectFilterBanner extends Component {
	constructor(props){
		super(props)
		this.state = {
			projects: this.props.projects,
			projectCategories: Array.from(new Set(this.props.projects.map(project => project.category)))
		}

		this.sortProjectsByCategory = this.sortProjectsByCategory.bind(this)
		this.sortProjectsByDate = this.sortProjectsByDate.bind(this)
		this.sortProjectsByTitle = this.sortProjectsByTitle.bind(this)
		this.handleFilterInput = this.handleFilterInput.bind(this)
		this.handleAllFilterInput = this.handleAllFilterInput.bind(this)
	}

	sortProjectsByCategory() {
		this.setState(state => ({
			projects: this.state.projects.sort(function(a, b) {
				return a.category > b.category ? 1 : -1;
			})
		}));
	}
	sortProjectsByDate() {
		this.setState(state => ({
			projects: this.state.projects.sort(function(a, b) {
				return a.date_created < b.date_created ? 1 : -1;
			})
		}));
	}
	sortProjectsByTitle() {
		this.setState(state => ({
			projects: this.state.projects.sort(function(a, b) {
				return a.title > b.title ? 1 : -1;
			})
		}));
	}
	handleFilterInput(e) {
		this.buttonClicked = e.currentTarget.id;
		this.setState(state => ({
			projects: this.props.projects.filter(project => project.category === this.buttonClicked)
		}))
	}
	handleAllFilterInput(e) {
		this.buttonClicked = e.target.id;
		this.setState(state => ({
			projects: this.props.projects
		}))
	}

	render() {

		return (

			<div>

				<section id="section-b" className="grid">
					<div className="content-wrap sortprojects">
						<h3 className="content-title">Sort Projects</h3>
						<ul>
							<li>									
								<button className="btn btn-sm" onClick={this.sortProjectsByCategory}>
									<p>By Category</p>
								</button>
							</li>
							<li>									
								<button className="btn btn-sm" onClick={this.sortProjectsByDate}>
									<p>By Date</p>
								</button>
							</li>
							<li>									
								<button className="btn btn-sm" onClick={this.sortProjectsByTitle}>
									<p>By Title</p>
								</button>
							</li>	
						</ul>
					</div>
				</section>

				<section id="section-b" className="grid">
					<div className="content-wrap filterprojects">
						<h3 className="content-title">Filter Projects</h3>
						<ul>
							<li>									
								<button className="btn" value="All" id="All" onClick={this.handleAllFilterInput}>
									<p>All</p>
								</button>
							</li>
							{this.state.projectCategories.map((category) => 
								<li>									
									<button className="btn" value={category} id={category} onClick={this.handleFilterInput}>
										<p>{category}</p>
									</button>
								</li>
							)}
						</ul>
					</div>
				</section>

				<div>
					<AllProjects projects={this.state.projects} />
				</div>

			</div>
		);
	}
};

export default ProjectFilterBanner
