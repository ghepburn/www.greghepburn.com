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
		});
	}

	render() {
		return (
			<div className="card BannerCard">
				<div className="SecondaryCard">
					<div className="container">

						<div class="">
							
							<div class="CardCenterContainer">
								<div className="border-bottom">
									<h3 className="BannerMessageBig">
										<strong>My Education</strong>
									</h3>
								</div>

								<br></br>
								<br></br>

								<div className="BannerMessageSmall text-center">
									
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

									<div className="row">
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

						</div>

					</div>
				</div>
			</div>
		);
	}
};

export default EducationBanner
