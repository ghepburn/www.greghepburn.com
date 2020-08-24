
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class HomeProjects extends Component {

	render() {

		return (
			<section id="section-b" className="grid">
				<div className="content-wrap">
					<ul>
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/backend.jpeg"></img>
								<div className="card-content">
									<h3 class="card-title">Backend Development</h3>
									<p>Using Python, Java and SQL as my primary tools, I enjoy working with data and building business logic for business applications.</p>
								</div>
							</div>
						</li>						
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/software_team.jpg"></img>
								<div className="card-content">
									<h3 class="card-title">Frontend Development</h3>
									<p>Using JavaScript, ReactJs, HTML and CSS I build and design the structure and view of web applications.</p>
								</div>
							</div>
						</li>
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/dataanalysis.jpeg"></img>
								<div className="card-content">
									<h3 class="card-title">Data Science</h3>
									<br></br>
									<p>Using Python's wide range of data science libraries I love working with raw data to create usful information.</p>
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
