import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export class AllProjects extends Component {
	constructor(props){
		super(props)
	}
	render () {
		return (

			<section id="section-a" className="grid">
				<div className="content-wrap">
					<div className="content-text">
						{this.props.projects.map((project) => 
							<div class="row">
								<Link to={`/projects/${project.id}`}>
									<div className="card btn">
										<h2><strong>{project.title}</strong></h2>
										<h5>{project.category}</h5>
										<p><strong>Created:</strong> {project.date_created}</p>
										<p><strong>Tools Used:</strong> {project.tools_used}</p>
										<p>{project.summary}</p>
									</div>
								</Link>
							</div>
						)}
					</div>
				</div>
			</section>
		);
	}
};

export default AllProjects