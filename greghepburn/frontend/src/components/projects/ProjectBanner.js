import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg } from 'reactstrap';

export class ProjectBanner extends Component {

	render() {
		return (
			<div className="card BannerCard">
				<img className="CardImage" src={this.props.image.image}></img>
				<div className="WhiteBoardMessageContainer">
					<p className="WhiteBoard1"><strong>MY WORK</strong></p>   
					<br></br><br></br>
				</div>	
			</div>
		);
	}
};

export default ProjectBanner