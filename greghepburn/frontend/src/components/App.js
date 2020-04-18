import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Project_Detail from './projects/projectBanners/projectContent/ProjectDetail';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
		}
	}

	componentDidMount() {
		axios.get(`http://www.greghepburn.com/api/projects/`)
		.then(res => {
			this.setState({ projects: res.data.results });
		});
	}

	render() {
		return (
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component= {() => <Home projects={this.state.projects} />} />
					<Route path="/about" exact component={() => <About />} />
					<Route path="/projects" exact component={() => <Projects projects={this.state.projects} />} />
					<Route path="/projects/:id" component={Project_Detail} />
				</Switch>
				<Footer />
			</Router>

		);
	}
}

ReactDOM.render(<App />, document.getElementById('react-layout'));
