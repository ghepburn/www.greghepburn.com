import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import StoryBanner from './aboutContent/StoryBanner';
import TimelineBanner from './aboutContent/TimelineBanner';
import EducationBanner from './aboutContent/EducationBanner';
import PersonalityBanner from './aboutContent/PersonalityBanner';

export class ContentBanner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showStory: false,
			showTimeline: false,
			showEducation: false,
			showPersonality: false
		}

		this.toggleStoryClick = this.toggleStoryClick.bind(this)
		this.toggleTimelineClick = this.toggleTimelineClick.bind(this)
		this.toggleEducationClick = this.toggleEducationClick.bind(this)
		this.togglePersonalityClick = this.togglePersonalityClick.bind(this)
	}

	toggleStoryClick() {
		this.setState(state => ({
			showStory: !state.showStory,
			showTimeline: false,
			showEducation: false,
			showPersonality: false
		}));
	}
	toggleTimelineClick() {
		this.setState(state => ({
			showTimeline: !state.showTimeline,
			showStory: false,
			showEducation: false,
			showPersonality: false
		}));
	}
	toggleEducationClick() {
		this.setState(state => ({
			showEducation: !state.showEducation,
			showStory: false,
			showTimeline: false,
			showPersonality: false
		}));
	}
	togglePersonalityClick() {
		this.setState(state => ({
			showPersonality: !state.showPersonality,
			showStory: false,
			showTimeline: false,
			showEducation: false
		}));
	}


	render() {
		const showStory = this.state.showStory
		const showTimeline = this.state.showTimeline
		const showEducation = this.state.showEducation
		const showPersonality = this.state.showPersonality

		let content;
		
		if (showStory) {
			content = <StoryBanner myProfile={this.props.myProfile} />
		} else if (showTimeline) {
			content = <TimelineBanner myProfile={this.props.myProfile} />
		} else if (showEducation) {
			content = <EducationBanner />
		} else if (showPersonality) {
			content = <PersonalityBanner />
		}


		return (
			<div>

				<section id="section-b" className="grid">
					<div className="content-wrap">
						<ul>
							<li>
								<div className="btn card about-card" onClick={this.toggleStoryClick}>
									<div className="card-content">
										<h4 class="card-title">My Story</h4>
									</div>
								</div>
							</li>
							<li>
								<div className="btn card about-card" onClick={this.toggleTimelineClick}>
									<div className="card-content">
										<h4 class="card-title">My Timeline</h4>
									</div>
								</div>
							</li>
							<li>
								<div className="btn card about-card" onClick={this.toggleEducationClick}>
									<div className="card-content">
										<h4 class="card-title">My Education</h4>
									</div>
								</div>
							</li>
							<li>
								<div className="btn card about-card" onClick={this.togglePersonalityClick}>
									<div className="card-content">
										<h4 class="card-title">My Personality</h4>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<br></br>
				</section>

				<div>
					{content}
				</div>

			</div>
		);
	}
};

export default ContentBanner
