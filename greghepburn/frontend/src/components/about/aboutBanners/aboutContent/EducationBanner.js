import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class EducationBanner extends Component {
	constructor(props) {
		super(props)
		this.state={
			education: []
		}
	}
	
	componentDidMount() {
		axios.get('http://www.greghepburn.com/api/education/')
		.then(res => {
			this.setState({ education: res.data.results });
			this.setState(state => ({
				education: this.state.education.sort(function(a, b) {
					return a.year > b.year ? 1 : -1;
				})
			}));

		});
	}

	render() {
		return (

			<section id="section-a" className="grid">
				<div className="content-wrap">
					<h2 className="content-title">My Education</h2>
					<div className="content-text">
						
						<div className="row">
							<div className="col-2">
								<p><strong>Year</strong></p>
							</div>
							<div className="col-2">
								<p><strong>Type</strong></p>
							</div>
							<div className="col-3">
								<p><strong>Issuing Institution</strong></p>
							</div>
							<div className="col">
								<p><strong>Information</strong></p>
							</div>
						</div>

						{this.state.education.map(item => 

						<div className="row border-top pt-2 pb-2">
							<div className="col-2">
								<p>{item.year}</p>
							</div>
							<div className="col-2">
								<p>{item.educationType}</p>
							</div>
							<div className="col-3">
								<p>{item.institution}</p>
							</div>
							<div className="col">
								<p>{item.description}</p>
							</div>
						</div>

						)}

					</div>
				</div>
			</section>
		);
	}
};

export default EducationBanner
