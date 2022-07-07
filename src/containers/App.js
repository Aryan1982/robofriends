import React, {  Component } from 'react';
import Searchbox from '../components/Searchbox'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import { robots } from './robots';
import Information from '../components/Information'
import './App.css';



class App extends Component {
	constructor() {
		super()
		this.state= {
			robots: robots,
			searchfield:''
		}
	}

	// componentDidMount(){
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response=> response.json())
	// 		.then(users=> this.setState({robots:users}))
	// 	// this.setState({robots: robots})

	// }
	onSearchChange=(event) =>{
		this.setState({searchfield: event.target.value})


	}
	render(){
			const filteredrobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
	return(
		<div className='tc'>
			
			<h1 className='f1'>RoboFriends</h1>
			<a href="/">
			<div className='pa2 bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5'>Home</div>
			</a>
			<Searchbox searchChange={this.onSearchChange}/>
			<Scroll>
			<Information robots="robots"/>
			
			<CardList robots={filteredrobots} />

			</Scroll>
		</div>
		);
	}
}

export default App;