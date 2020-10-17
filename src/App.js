import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/header.js'
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js'
import About from './components/pages/About.js'
import {v4} from 'uuid'
class App extends Component {
  state={
    todos: [
      {
        id:v4(),
        title: 'gaadi waala aaya ghar se katchra nikal',
        completed: false
      },
      {
        id:v4(),
        title: 'gaiya ki gaand marna',
        completed: false
      },
      {
        id:v4(),
        title: 'gaiya ko daaru pilana',
        completed: false
      }
    ]
  }

  //toggle complete
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id=== id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  
  //delete todo
  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  //add todo
  addTodo =(title) =>{
    const newTodo={
      id:v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    
    return (
      <Router>
        <div className="App">
        
        <div className="container">
        <Header />
        <Route exact path="/" render={props =>(
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
          </React.Fragment>
        )
        }>
        </Route>
        <Route path="/about" component={About}/>
        
        </div>
      </div>
      </Router>
      
    );
  }
}

export default App;
