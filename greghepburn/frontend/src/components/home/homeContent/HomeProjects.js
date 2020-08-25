
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
									<p>My greatest strength is backend development.  With Python, Java and SQL I comfortably structure applicaitons with Restful API's, relational and non-relational databases, and business logic.</p>
								</div>
							</div>
						</li>						
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/software_team.jpg"></img>
								<div className="card-content">
									<h3 class="card-title">Frontend Development</h3>
									<p>Using JavaScript, ReactJs, HTML and CSS I build and design frontend systems.  I am experience in using ReactJs context to produce reusable class and functional components for a clean project structure.</p>
								</div>
							</div>
						</li>
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/dataanalysis.jpeg"></img>
								<div className="card-content">
									<h3 class="card-title">DevOps</h3>
									<br></br>
									<p>I am certified as a Google Professional IT Support Specialist and AWS Developer Associate. I am knowlegable in networking, the unix command line, security, and cloud computing.</p>
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
