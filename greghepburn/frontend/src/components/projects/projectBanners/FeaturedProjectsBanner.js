import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export class FeaturedProjectsBanner extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (

			<section id="section-b" className="grid">
				<div className="content-wrap">
					<h3 className="content-title">Highlighted Projects</h3>
					<ul>
						{this.props.projects.filter(project=>project.featured).map((project) =>
							<li>
								<Link to={`/projects/${project.id}`}>
									<div className="btn card">
										<div className="card-content">
											<h4 class="card-title">{project.title}</h4>
											<p>{project.category}</p>
										</div>
									</div>
								</Link>
							</li>
						)}						
					</ul>
				</div>
			</section>
		);
	}
};

export default FeaturedProjectsBanner