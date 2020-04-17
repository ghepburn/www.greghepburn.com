import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeBanner from './HomeBanner';

export class Home extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div>
				<HomeBanner image={this.props.image}/>
			</div>
		);
	}
};

export default Home