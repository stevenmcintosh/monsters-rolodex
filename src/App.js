import React, { Component } from 'react';
import { SearchBox } from './components/Search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; //bootstrap component

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
      <Container>
        <Row>
          <Col>
            <h1>Monsters Rolodex</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchBox searchField={searchField} 
            placeHolder="Search Monsters..."
            handleChange={e => this.setState({searchField: e.target.value})}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardList monsters={filteredMonsters} />
          </Col>
        </Row>
        </Container> 
        </div>
    )
  }
}


export default App;