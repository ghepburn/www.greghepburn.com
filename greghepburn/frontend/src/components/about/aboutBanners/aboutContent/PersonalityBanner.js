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
								<img src="https://www.greghepburn.com/media/images/agent_selfie.jpeg"></img>
							</div>
						</li>
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/gregval.jpeg"></img>
							</div>
						</li>
						<li>
							<div className="card">
								<img src="https://www.greghepburn.com/media/images/selfie.jpeg"></img>
							</div>
						</li>
					</ul>
				</div>
				<br></br>
				<div className="content-wrap">
					<img src="https://www.greghepburn.com/media/images/PersonalityTest_page1.jpeg"></img>
				</div>
				<div className="content-wrap">
					<img src="https://www.greghepburn.com/media/images/PersonalityTest_page2.jpeg"></img>
				</div>
				<div className="content-wrap">
					<img src="https://www.greghepburn.com/media/images/PersonalityTest_page3.jpeg"></img>
				</div>
			</section>

		);
	}
};

export default PersonalityBanner
