import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

export class StoryBanner extends Component {

	render() {
		return (
			<div className="card BannerCard">
				<div className="SecondaryCard">
					<div className="container">

						<div class="">
							
							<div class="CardCenterContainer">
								<div className="border-bottom">
									<h3 className="BannerMessageBig">
										<strong>My Story</strong>
									</h3>
								</div>

								<br></br>
								<br></br>

								<div className="BannerMessageSmall">
									<p>In <strong>2017 I graduated</strong> with a Finance & Economics Degree from the University of Guelph.</p>
									<br></br>
									<p>For a year I <strong>worked a few different jobs</strong>, but ultimatley was <strong>unsatisfied</strong> and <strong>bored</strong>.</p>
									<br></br>
									<p>I spent a lot of time thinking about what career I wanted to pursue. At times <strong>I felt very lost</strong>.</p>
									<br></br>
									<p>I realized that the previous jobs which I enjoyed most were where my responsibillity laid within being a problem solver. <strong>I love to feel challenged</strong>.</p>  
									<br></br>
									<p>My favorite job was at a local campground.  I worked 40+ hour weeks as an assistant manager, ensuring customer satisfaction and <strong>"YouTubeing" "How-To" videos for each days new problem.</strong></p>
									<br></br>
									<p>My eagerness to learn lead me to step into <strong>learning how to computer program</strong> in <strong>late 2018</strong>.</p>
									<br></br>
									<p>I began learning at the library after work hours. After a few months, I reduced my work hours to part-time.  After a few more months <strong>I quit my job to pursue studying full time</strong>.</p>
									<br></br>
									<p>Happily, this is where I reside today.</p>
									<br></br>
									<p>Now, I aim to get a full-time position as a <strong>Python Developer</strong>.</p>
									<br></br>
									<p><strong>My long term goal</strong> is to work as a <strong>member of a development team</strong>. Possibly a consultant team. Where we work together to overcome challenges, deadlines and customer expectations.</p>
								</div>

							</div>

							
						</div>

					</div>
				</div>
			</div>
		);
	}
};

export default StoryBanner