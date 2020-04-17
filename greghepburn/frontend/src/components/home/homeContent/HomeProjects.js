import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class HomeProjects extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			backend_image: [],
			software_image: [],
			data_image: []
		}
	}

	componentDidMount() {
		axios.get('')
		.then(res => {
			this.setState({ backend_image: res.data });
		});
		axios.get('')
		.then(res => {
			this.setState({ software_image: res.data });
		});
		axios.get('')
		.then(res => {
			this.setState({ data_image: res.data });
		});

	}

	render() {

		return (
			<section id="section-b" className="grid">
				<div className="content-wrap">
					<ul>
						<li>
							<div className="card">
								<img src="https://via.placeholder.com/150"></img>
								<div className="card-content">
									<h3 class="card-title">Backend Development</h3>
									<p>I enjoy building the logic which drives the functionality in the backend.  I build API's, working with databases, and love using OOP.</p>
								</div>
							</div>
						</li>						
						<li>
							<div className="card">
								<img src="https://via.placeholder.com/150"></img>
								<div className="card-content">
									<h3 class="card-title">Software Engineering</h3>
									<p>My greatest passion in programming is creating clean & organized object oriented code.  I like to challenged, meet deadlines, and work as part of a team.</p>
								</div>
							</div>
						</li>
						<li>
							<div className="card">
								<img src="https://via.placeholder.com/150"></img>
								<div className="card-content">
									<h3 class="card-title">Data Analysis</h3>
									<p>I love data because I love optimising descisions.</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>

		);
	}
};

export default HomeProjects