import React, { Component } from 'react';
import { SearchBox } from './components/Search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
  super();

    this.state = {
      monsters: [],
      searchField: '',
    }


  }

  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
    //console.log(this.monsters.users);
    //.then(users => response.username);
  }
  
  

  render() {

    const { monsters, searchField} = this.state; 
    const filteredMonsters = monsters.filter(monster => monster.name
      .toLowerCase()
      .includes(searchField.toLowerCase()));
    
    return (      
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox searchField={searchField} 
        placeHolder="Search Monsters..."
        handleChange={e => this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredMonsters} />
      </div> 
    )
  }
}


export default App;