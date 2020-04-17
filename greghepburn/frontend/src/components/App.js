import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Banner from './layout/Banner';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Project_Detail from './projects/projectContent/ProjectDetail';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			images: [],
			whiteboard_image: [],
			selfie_image: [],
			whiteboard_lilman: [],
			whiteboard_todo: []
		}
	}

	componentDidMount() {
		axios.get(`http://www.greghepburn.com/api/projects/`)
		.then(res => {
			this.setState({ projects: res.data.results });
		});
		axios.get('http://www.greghepburn.com/api/images/7/')
		.then(res => {
			this.setState({ whiteboard_image: res.data });
		});
		axios.get('http://www.greghepburn.com/api/images/8/')
		.then(res => {
			this.setState({ whiteboard_lilman: res.data });
		});
		axios.get('http://www.greghepburn.com/api/images/9/')
		.then(res => {
			this.setState({ whiteboard_todo: res.data });
		});

	}

	render() {
		return (
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component= {() => <Home projects={this.state.projects} image={this.state.whiteboard_image} />} />
					<Route path="/about" exact component={() => <About image={this.state.whiteboard_lilman} selfie_image={this.state.selfie_image}/>} />
					<Route path="/projects" exact component={() => <Projects projects={this.state.projects} image={this.state.whiteboard_todo}/>} />
					<Route path="/projects/:id" component={Project_Detail} />
				</Switch>
				<Footer />
			</Router>

		);
	}
}

ReactDOM.render(<App />, document.getElementById('react-layout'));
