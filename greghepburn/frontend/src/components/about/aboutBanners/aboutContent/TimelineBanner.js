import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg } from 'reactstrap';

export class TimelineBanner extends Component {
	render() {
		return (

			<section id="section-a" className="grid">
				<div className="content-wrap">
					<h2 className="content-title">My Journey</h2>
					<div className="content-text">
					
						<div class="timeline">
							<div class="timelineContainer left border-right">
								<div class="content">
									<h2>Late 2018</h2>
									<p><strong>Python & SQL Syntax</strong></p>
								</div>
							</div>
							<div class="timelineContainer right">
								<div class="content">
									<h2>Early 2019</h2>
									<p><strong>Data Analysis:</strong> Pandas, MatPlotLib & Numpy Libraries.  Cleaned, organized, visuallized and manipulated data.</p>
								</div>
							</div>
							<div class="timelineContainer left border-right">
								<div class="content">
									<h2>Early-Mid 2019</h2>
									<p><strong>Machine Learning:</strong> Keras, SciKitLearn, TensorFlow, Numpy libraries.  Explored machine learning through "Make Money With Machine Learning Course".  Dove deep into mechanics of neural networks.</p>
								</div>
							</div>
							<div class="timelineContainer right">
								<div class="content">
									<h2>Mid 2019</h2>
									<p><strong>Website-Development:</strong> Django, Flask, JavaScript, Linux.  Built several websites exploring frameworks. Explored frontend development projects.</p>
								</div>
							</div>
							<div class="timelineContainer left border-right">
								<div class="content">
									<h2>Mid-Late 2019</h2>
									<p><strong>Data Warehousing:</strong> Leaned into business intelligence and databases.  Entrolled into 5-course "Data Warehousing for Business Intelligence Course". Completed work using MicroStrategy and Tableau.  Recieved Tableau Developer Certification.</p>
								</div>
							</div>
							<div class="timelineContainer right">
								<div class="content">
									<h2>Mid-Late 2019</h2>
									<p><strong>IT / Foundational Knowledge:</strong> Google IT Professional Online 5-part Course. Built knowledge in networks, operating systems, system admin, hardware, and software.</p>
								</div>
							</div>
							<div class="timelineContainer left border-right">
								<div class="content">
									<h2>Late 2019 - Early 2020</h2>
									<p><strong>OOP:</strong> Algorithms, Data Structures, Design Patterns, and GUI Projects.  Built Algorithm visualization GUI.  Learned Design patterns and then re-build same project.  Found OOP code a huge passion.</p>
								</div>
							</div>
							<div class="timelineContainer right">
								<div class="content">
									<h2>Early-Mid 2020</h2>
									<p><strong>API's:</strong> Wanted to learn everything API. Used Flask, PostGres, and SQLAlchemy to build professional API with JWT authentication.</p>
								</div>
							</div>
							<div class="timelineContainer left border-right">
								<div class="content">
									<h2>Early-Mid 2020</h2>
									<p><strong>Get Developer Job:</strong> Learned React, built personal website, deployed on Docker, redid LinkedIn, polished projects.</p>
								</div>
							</div>
						</div>


					</div>
				</div>
			</section>

		);
	}
};

export default TimelineBanner