import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg } from 'reactstrap';

export class TimelineBanner extends Component {
	render() {
		return (

			<section id="section-a" className="grid">
				<div className="content-wrap">
					<h2 className="content-title">My Study Timeline</h2>
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
									<p><strong>Data Analysis:</strong> Completed data analysis projects using stock data and NHL player data.  Applied Python's Pandas and MatPlotLib libraries to grab, clean, and visualize data.</p>
								</div>
							</div>
							<div class="timelineContainer left border-right">
								<div class="content">
									<h2>Early-Mid 2019</h2>
									<p><strong>Machine Learning:</strong> Enrolled into Siraj Ravels "Make Money With Machine Learning" 10-week online course. I Completed 10 assignments using Python to apply regression, classification, neural network, reinforcement learning, and generative adversarial network machine leanring models to datasets.</p>
								</div>
							</div>
							<div class="timelineContainer right">
								<div class="content">
									<h2>Mid 2019</h2>
									<p><strong>Frontend & Backend Website Development:</strong> Completed projects using the Django and Flask frameworks.  Studied and applied JavaScript, CSS, HTML. Dug in to understand the details of each framework. Depolyed websites via Ubuntu Linode and Heroku servers.</p>
								</div>
							</div>
							<div class="timelineContainer left border-right">
								<div class="content">
									<h2>Mid-Late 2019</h2>
									<p><strong>Data Warehousing:</strong> Entrolled in the University of Colorado's "Data Warehousing for Business Intelligence" 5-part online course. Completed assignments in data warehouse design, data integration, relational database applicaiton, business intelligence concepts and tools, and database management. Used Microstrategy and Tableau Desktop to build dynamic data dashboards.</p>
								</div>
							</div>
							<div class="timelineContainer right">
								<div class="content">
									<h2>Mid-Late 2019</h2>
									<p><strong>IT / Foundational Knowledge:</strong> Completed "Google IT Professional Support Certificate" 5-part online course. Past tests and completed assignments in areas of technical support fundementals, computer networking, operating system, system administration, and system security.</p>
								</div>
							</div>
							<div class="timelineContainer left border-right">
								<div class="content">
									<h2>Late 2019 - Early 2020</h2>
									<p><strong>Object Oriented Programming:</strong> I completed a GUI algorithm visualization project. I studied and applied OOP princples, design patterns, and organized project structure.</p>
								</div>
							</div>
							<div class="timelineContainer right">
								<div class="content">
									<h2>Early-Mid 2020</h2>
									<p><strong>API's:</strong> I built multiple REST API's using the DJango and Flask frameworks.  I studied and applied the HTTP protocol, JSON, and SQLAlchemy.</p>
								</div>
							</div>
							<div class="timelineContainer left border-right">
								<div class="content">
									<h2>Mid 2020</h2>
									<p><strong>Gain Employment:</strong> I learned React, and used it with Django to and build a full-stack personal website. The website was deployed onto an Apache Ubuntu server.</p>
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
