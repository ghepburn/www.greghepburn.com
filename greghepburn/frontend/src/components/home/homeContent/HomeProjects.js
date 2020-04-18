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
								<img src="http://www.greghepburn.com/media/images/backend.jpeg"></img>
								<div className="card-content">
									<h3 class="card-title">Backend Development</h3>
									<p>I enjoy building the logic which drives the functionality of the project.</p>
								</div>
							</div>
						</li>						
						<li>
							<div className="card">
								<img src="http://www.greghepburn.com/media/images/software_team.jpg"></img>
								<div className="card-content">
									<h3 class="card-title">Software Engineering</h3>
									<p>My greatest passion in programming is creating clean & organized object oriented code</p>
								</div>
							</div>
						</li>
						<li>
							<div className="card">
								<img src="http://www.greghepburn.com/media/images/dataanalysis.jpeg"></img>
								<div className="card-content">
									<h3 class="card-title">Data Science</h3>
									<p>Do I want to optimize my decisions in life? umm of course! Here lies my deep love for working with data.</p>
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
