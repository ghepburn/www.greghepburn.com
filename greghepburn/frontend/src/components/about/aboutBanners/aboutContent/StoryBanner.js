import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

export class StoryBanner extends Component {

	render() {
		return (

			<section id="section-a" className="grid">
				<div className="content-wrap">
					<h2 className="content-title">My Story</h2>
					<div className="content-text mystory">
						<p>In 2017 I graduated with a Finance & Economics Degree from the University of Guelph.</p>
						<p>For a year I worked a few different jobs, but ultimatley was unsatisfied and bored.</p>
						<p>I spent a lot of time thinking about what career I wanted to pursue. At times I felt very lost.</p>
						<p>I realized that the previous jobs which I enjoyed most were where my responsibillity laid within being a problem solver. I love to feel challenged.</p>  
						<p>My favorite job was at a local campground.  I worked 40+ hour weeks as an assistant manager, ensuring customer satisfaction and "YouTubing" "How-To" videos for each days new problem.</p>
						<p>My eagerness to learn lead me to step into learning how to computer program in late 2018.</p>
						<p>I began learning at the library after work hours. After a few months, I reduced my work hours to part-time.  After a few more months I quit my job to pursue studying full time.</p>
						<p>Happily, this is where I reside today.</p>
						<p>Now, I aim to get a full-time position as a Python Developer.</p>
						<p>My long term goal is to work as a member of a development team. Possibly a consultant team. Where we work together to overcome challenges, deadlines and customer expectations.</p>	

					</div>
				</div>
			</section>

		);
	}
};

export default StoryBanner
