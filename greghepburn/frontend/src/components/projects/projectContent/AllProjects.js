import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export class AllProjects extends Component {
	constructor(props){
		super(props)
	}
	render () {
		return (
			<div className="card BannerCard">
				<div className="PrimaryCard">
					<div className="container">

						<div>
							<p className="BannerMessageBig"><strong>My Projects</strong></p>
							
							{this.props.projects.map((project) => 

								<div class="">
									<div className="row card">
										<div className="columnButton">
										
											<Link to={`/projects/${project.id}`}>
												<div className="btn btn-outline-secondary">
													<h2><strong>{project.title}</strong></h2>
													<h5>{project.category}</h5>
													<p><strong>Created:</strong> {project.date_created}</p>
													<p><strong>Tools Used:</strong> {project.tools_used}</p>
													<p>{project.summary}</p>
												</div>
											</Link>

										</div>
									</div>
								</div>
							)}
						</div>
						
					</div>
				</div>
			</div>
		);
	}
};

export default AllProjects