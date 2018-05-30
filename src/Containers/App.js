import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import { robots } from '../Components/robots';
import './App.css';
import Scroll from '../Components/Scroll.js';

class App extends Component{
	constructor(){
		super()
			this.state= {
				robots:[],
				searchFieldValue:''	
			}
			console.log('constructor');
		}

	componentDidMount(){
		console.log('componentDidMount');
		// Using fetch
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>
			this.setState({robots:users})
		)
	}

	OnSearchChange=(event)=>{
		this.setState({searchFieldValue: event.target.value});
	}

	render(){
		console.log('render');
		const{robots,searchFieldValue}=this.state;
		const filteredrobots= robots.filter(robot =>{
				return robot.name.toLowerCase().includes(searchFieldValue.toLowerCase());
		});
		console.log(filteredrobots);
		return(
			<div className="tc">
			<h1>Robofriends</h1>
			<SearchBox searchChange={ this.OnSearchChange }/>
			<Scroll>
				<CardList robots={filteredrobots} />
			</Scroll>
			</div>
		);

	}
}


export default App;