import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg, CardBody, CardText, CardTitle, CardImgOverlay } from 'reactstrap';
import axios from 'axios';

export class HomeBanner extends Component {
	constructor(props){
		super(props);
		this.state={
			image: [], 
			timer: 0
		}
	}
	
	render() {

		return (
			<div className="card TitleBannerCard">
				<img className="CardImage" src={this.props.image.image}></img>
				<div className="WhiteBoardMessageContainer">
					<p className="WhiteBoard1"><strong>PYTHON DEVELOPER</strong></p>   
					
				</div>
			</div>
		);
	}
};

export default HomeBanner