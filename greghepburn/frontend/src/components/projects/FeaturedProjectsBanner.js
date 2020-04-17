import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export class FeaturedProjectsBanner extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="card BannerCard">
				<div className="PrimaryCard">
					<div className="container">

						<div className="">
							<p className="BannerMessageBig"><strong>Highlighted Work</strong></p>

							<div className="">

								<div className="row CenteredRow border-top">

									{this.props.projects.filter(project=>project.featured).map((project) =>
									
									<div className="col-4">
										
										<Link to={`/projects/${project.id}`}>
											<div className="FeaturedProject btn btn-outline-secondary">
												<p class="BannerMessageSmall"><strong>{project.title}</strong></p>
												<p><strong>Category:</strong> {project.category}</p>
												<p><strong>Tools Used:</strong> {project.tools_used}</p>
												<p>{project.desc}</p>
											</div>
										</Link>

									</div>

									)}
									
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
};

export default FeaturedProjectsBanner