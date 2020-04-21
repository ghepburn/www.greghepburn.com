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
									<p>I enjoy facillitating communication with API's, working with data and databases, and creating the logic whcih drives the frontend.</p>
								</div>
							</div>
						</li>						
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/software_team.jpg"></img>
								<div className="card-content">
									<h3 class="card-title">Software Development</h3>
									<p>OOP is perhaps my greatest codeing passion. Software development facilitates the challenge and teamwork that I crave to be apart of.</p>
								</div>
							</div>
						</li>
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/dataanalysis.jpeg"></img>
								<div className="card-content">
									<h3 class="card-title">Data Science</h3>
									<p>Do I want to optimize my decisions in life? Of course! Here lies my deep love for working with data.</p>
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
