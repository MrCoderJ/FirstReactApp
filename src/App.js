import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.components';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchedText: ''
    }
  }
  handleChange = (e) =>{
    this.setState({searchedText: e.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render(){
    const {monsters, searchedText} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchedText.toLowerCase()))
    return(
       <div className="App">
         <h1>Monster Roledex</h1>
         <SearchBox placeholder="search-monster" handleChange={this.handleChange}/>
         <CardList monsters={filteredMonsters}/>
    </div>
    )
  }
}

export default App;
