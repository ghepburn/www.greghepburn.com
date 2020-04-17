 import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';

export class Project_Detail extends Component {
	constructor(props){
		super(props)
		this.state = {
			project: []
		}
	}

	componentDidMount() {
		fetch(`http://www.greghepburn.com/api/projects/${this.props.match.params.id}`)
		.then(results => results.json()
		.then((data) => {
			this.setState({ project: data });
		}))
	}

	render() {
		const { project } = this.state
		return (
			<div>

				<div className="card BannerCard">
					<div className="PrimaryCard">
						<div className="container">

							<div className="BannerMessageSmall">
								<br></br>
								<div className="border-bottom">
									<p className="text-center BannerMessageBig"><strong>{project.title}</strong></p>
								</div>
								<div className="DetailCard Blue pt-4 pb-4">
									<p className="">{project.category}</p>
									<p><strong>Created:</strong> {project.date_created}</p>
									<p><strong>Skills Used:</strong> {project.tools_used}</p>
									<a><strong>See Full Code:</strong> </a><a href={project.github_link}>{project.github_link}</a>
								</div>
									
								<p className="border-bottom pr-6 pl-6">Summary</p>

								<div className="DetailCard Blue pt-4 pb-4">
									<p>{project.summary}</p>
								</div>

								<p className="border-bottom pl-6 pr-6">Details</p>

								<div className="DetailCard Blue pt-4 pb-4">
									<p>{project.description}</p>
								</div>

								<p className="border-bottom pl-6 pr-6">{project.picture_title}</p>
								<img className="" src={project.picture}></img>
							
							</div>

						</div>
					</div>
				</div>

			</div>
		);
	}
};

export default Project_Detail;
