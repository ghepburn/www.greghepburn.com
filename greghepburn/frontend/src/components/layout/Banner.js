import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export class Banner extends Component {
	render() {
		return (
			<Fragment>
			<section id="home" className="main-banner parallaxie">
				<div className="heading">
					<h1>
						hello i'm Dominic
					</h1>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					</p>
					<h3 className="cd-headline clip is-full-width">
						<span>
							Lorem ipsum dolor sit amet 
						</span>
						<span className="cd-words-wrapper">
							<b className="is-visible">Web Developer</b>
							<b>Web Design</b>
							<b>Creative Design</b>
							<b>Graphic Design</b>
						</span>
					</h3>
				</div>
			</section>
			</Fragment>

		);
	}
};

export default Banner