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
				<div className="card BannerCard">
					<div className="PrimaryCard">
						<div className="container">

							<div className="justify-content-center">
								<p className="BannerMessageBig">
									<strong>Hi There! </strong>
								</p>
								<br></br> 
								<p className="BannerMessageSmall text-center"><strong>Welcome to my site!</strong> My name is <strong>Greg Hepburn</strong> and I am a <strong>self-taught Python Developer</strong>.</p>
								<p className="BannerMessageSmall text-center pt-5">My lack of formal education in programming shows only one thing... that I have the <strong>passion</strong>, <strong>motivation</strong>, and <strong>independence</strong> to achomplish my goals.</p>
							</div>

							<br></br>
							<br></br>

							<div className="row CenteredRow border-top">

								<div className="col-4">
									<button className="AboutSectionButton CardImage btn btn-outline-secondary" onClick={this.toggleStoryClick} >
										<p className="BannerMessageSmall"><strong>My Story</strong></p>
										<p>{this.state.showStory}</p>
									</button>
								</div>
								<div className="col-4">
									<button className="AboutSectionButton btn btn-outline-secondary" onClick={this.toggleTimelineClick} >
										<p className="BannerMessageSmall"><strong>Learning Path</strong></p>
									</button>
								</div>
								<div className="col-4">
									<button className="AboutSectionButton btn btn-outline-secondary" onClick={this.toggleEducationClick} >
										<p className="BannerMessageSmall"><strong>My Education</strong></p>
									</button>
								</div>
							
							</div>

						</div>
					</div>
				</div>

				<div>
					{content}
				</div>

			</div>
		);
	}
};

export default IntroductionBanner