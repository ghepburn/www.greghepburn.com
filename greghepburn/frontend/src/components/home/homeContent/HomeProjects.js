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
									<p>I enjoy building the logic which drives the functionality of a website.  I work with data and databases, using HTTP protocols to build RESTful API's, and apply OOP to structure the code.</p>
								</div>
							</div>
						</li>						
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/software_team.jpg"></img>
								<div className="card-content">
									<h3 class="card-title">Software Development</h3>
									<p>I enjoy applying my knowledge of Python and OOP to building projects. I work with GUI's, web-applications, and more. I understand how I learn and I use that to tackle projects out of my comfort zone.</p>
								</div>
							</div>
						</li>
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/dataanalysis.jpeg"></img>
								<div className="card-content">
									<h3 class="card-title">Data Science</h3>
									<br></br>
									<p>I enjoy optimizeing the decisions in my life. The best way to do this is by using available data. I apply Python's data science and machine learning libraries to create actionable insights from data.</p>
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
