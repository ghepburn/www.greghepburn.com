import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import AllProjects from './projectContent/AllProjects';

export class SortFilterBanner extends Component {
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
				<div className="card BannerCard">
					<div className="SecondaryCard">
						<div className="container">

							<div className="">

								<p className="BannerMessageSmall"><strong>Sort Projects</strong></p>
								<div className="">

									<div className="row container">

										<div className="col-2">										
											<button className="btn btn-info btn-sm columnButton" onClick={this.sortProjectsByCategory}>
												<p>By Category</p>
											</button>
										</div>
										<div className="col-2">										
											<button className="btn btn-info btn-sm columnButton" onClick={this.sortProjectsByDate}>
												<p>By Date</p>
											</button>
										</div>
										<div className="col-2">										
											<button className="btn btn-info btn-sm columnButton" onClick={this.sortProjectsByTitle}>
												<p>By Title</p>
											</button>
										</div>

										
									</div>

								</div>
							</div>

							<br></br>

							<div className="border-top">

								<br></br>
							
								<p className="BannerMessageSmall"><strong>Filter By Category</strong></p>
								<div className="">

									<div className="row container	">
										
										<div className="col">										
											<button className="columnButton btn btn-info btn-sm" value="All" id="All" onClick={this.handleAllFilterInput}>
												<p>All</p>
											</button>
										</div>

										{this.state.projectCategories.map((category) => 
											<div className="col">										
											<button className="btn btn-info btn-sm columnButton" value={category} id={category} onClick={this.handleFilterInput}>
												<p>{category}</p>
											</button>
										</div>
										)}
		
									</div>
									
								</div>
							</div>
							
						</div>
					</div>
				</div>

				<div>
					<AllProjects projects={this.state.projects} />
				</div>

			</div>

		);
	}
};

export default SortFilterBanner