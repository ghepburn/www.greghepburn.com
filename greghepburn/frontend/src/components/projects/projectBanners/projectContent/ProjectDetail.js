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
		fetch(`http://127.0.0.1:8000/api/projects/${this.props.match.params.id}`)
		.then(results => results.json()
		.then((data) => {
			this.setState({ project: data });
		}))
	}

	render() {
		return (


			<section id="section-a" className="grid">
				<div className="content-wrap">
					<img src={this.state.project.picture}></img>
					<h2 className="content-title">{this.state.project.title}</h2>
					<div className="content-text">
						<p className="">{this.state.project.category}</p>
						<p><strong>Created:</strong> {this.state.project.date_created}</p>
						<p><strong>Skills Used:</strong> {this.state.project.tools_used}</p>
						<a><strong>See Full Code:</strong> </a><a href={this.state.project.github_link}>{this.state.project.github_link}</a>
						<div className="border-top m-4 p-2">
							<p><strong>Summary</strong> <br></br>{this.state.project.summary}</p>
						</div>
						<div className="border-top m-4 p-2">
							<p><strong>Details</strong> <br></br>{this.state.project.description}</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
};

export default Project_Detail;
