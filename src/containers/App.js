import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import {robots} from '../robots.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	render() {
		const {robots, searchfield} = this.state
		const filteredRobot = robots.filter(
			robot => robot.name.toLowerCase().includes(searchfield.toLowerCase())
		);
		if (this.state.robots.length === 0) {
			return <h1 className='tc'>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobot}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			)
		}
	}
}

// const App = (prop) => {
// 	return (
// 			<div className='tc'>
// 				<h1>RoboFriends</h1>
// 				<SearchBox />
// 				<CardList robots={robots}/>
// 			</div>
// 		);
// };

export default App;