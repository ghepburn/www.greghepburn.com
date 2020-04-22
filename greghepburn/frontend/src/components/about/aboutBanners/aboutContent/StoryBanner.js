import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

export class StoryBanner extends Component {

	render() {
		return (

			<section id="section-a" className="grid">
				<div className="content-wrap">
					<h2 className="content-title">My Story</h2>
					<div className="content-text mystory">
						<p>In 2017 I graduated with a Bachelor Of Commerce (Honors Program) Degree, majoring in Finance & Economics, from the University of Guelph.</p>
						<p>After graduating, I worked my fifth summer at a local campground as the Assistant Manager.  I worked many hour per week overseeing park operations.</p>
						<p>Next, I became licesned within the securities industry by completing the Canadian Securities Course and got a position as a Financial Service Representitive at CIBC. I then left CIBC to work as a Inside Sales Representitive at a growing small-medium business named Diversified Power Inc.</p>
						<p>I wanted to find a career where I could be challenged and could continue learning.</p> 
						<p>This desire led me to begin learning the Python programming language in late 2018.</p>
						<p>I went to the public library to study after work, and I later reduced my work hours down to part time in order to free up more time to study.</p>
						<p>In August 2019 I chose to leave my job in order to purue studying Python programming full time.</p>
						<p>Over my time studying, I have applied Python to learning data analysis, machine learning, website development, and GUI development.</p>
						<p>I also have taken courses in supporting subjects such as information technology, data warehousing, and design patterns.</p>						
<p>My goal is to gain employment as a software developer.</p>	

					</div>
				</div>
			</section>

		);
	}
};

export default StoryBanner
