import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

export class PersonalityBanner extends Component {

	render() {
		return (

			<section id="section-b" className="grid">
				<div className="content-wrap">
					<ul>
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/me.jpg"></img>
							</div>
						</li>
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/gregval.jpg"></img>
							</div>
						</li>
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/selfie_2.jpg"></img>
							</div>
						</li>
					</ul>
				</div>
				<div id="personality_test" className="content-wrap">
					<h2 className="border-bottom">Myers Briggs Personality Test</h2>
					<img src="https://www.greghepburn.com/media/images/MyersBriggs1.JPG"></img>
					<img src="https://www.greghepburn.com/media/images/MyersBriggs2.JPG"></img>
					<img src="https://www.greghepburn.com/media/images/MyersBriggs3.JPG"></img>
				</div>
			</section>

		);
	}
};

export default PersonalityBanner
