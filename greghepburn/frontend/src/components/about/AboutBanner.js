import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg } from 'reactstrap';

export class AboutBanner extends Component {

	render() {
		return (
			<div className="card BannerCard">
				<img className="CardImage" src={this.props.whiteboard_img.image}></img>
				<div className="WhiteBoardMessageContainer">
					<p className="WhiteBoard1"><strong>WHO I AM...</strong></p>   
					<br></br><br></br>
				</div>	
			</div>
		);
	}
};

export default AboutBanner