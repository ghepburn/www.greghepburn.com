import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import StoryBanner from './aboutContent/StoryBanner';
import TimelineBanner from './aboutContent/TimelineBanner';
import EducationBanner from './aboutContent/EducationBanner';

export class IntroductionBanner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showStory: false,
			showTimeline: false,
			showEducation: false
		}

		this.toggleStoryClick = this.toggleStoryClick.bind(this)
		this.toggleTimelineClick = this.toggleTimelineClick.bind(this)
		this.toggleEducationClick = this.toggleEducationClick.bind(this)
	}

	toggleStoryClick() {
		this.setState(state => ({
			showStory: !state.showStory,
			showTimeline: false,
			showEducation: false
		}));
	}
	toggleTimelineClick() {
		this.setState(state => ({
			showTimeline: !state.showTimeline,
			showStory: false,
			showEducation: false
		}));
	}
	toggleEducationClick() {
		this.setState(state => ({
			showEducation: !state.showEducation,
			showStory: false,
			showTimeline: false
		}));
	}


	render() {
		const showStory = this.state.showStory
		const showTimeline = this.state.showTimeline
		const showEducation = this.state.showEducation

		let content;
		
		if (showStory) {
			content = <StoryBanner myProfile={this.props.myProfile} />
		} else if (showTimeline) {
			content = <TimelineBanner myProfile={this.props.myProfile} />
		} else if (showEducation) {
			content = <EducationBanner />
		}

		return (
			<div>

				<section id="section-b" className="grid">
					<div className="content-wrap">
						<p>My mission is to become a professional in the programming industry. I want to be an example for others, who feel discouraged about entering into a career field which they have no formal education in.</p>
						<ul>
							<li>
								<div className="btn card" onClick={this.toggleStoryClick}>
									<div className="card-content">
										<h4 class="card-title">My Story</h4>
									</div>
								</div>
							</li>
							<li>
								<div className="btn card" onClick={this.toggleTimelineClick}>
									<div className="card-content">
										<h4 class="card-title">My Timeline</h4>
									</div>
								</div>
							</li>
							<li>
								<div className="btn card" onClick={this.toggleEducationClick}>
									<div className="card-content">
										<h4 class="card-title">My Education</h4>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>

				<div>
					{content}
				</div>

			</div>
		);
	}
};

export default IntroductionBanner
