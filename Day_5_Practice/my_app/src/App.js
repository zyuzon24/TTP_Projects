import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
      super();
      this.state = {
          name: "",
          listOfNames: []
      }
  }
  
  handleChange (event) {
      const name = event.target.value;
      this.setState( {
          name
      } )
      
      console.log("This is the name in the handleChange: ", this.state.name);
  }

  handleSubmit (event) {
      event.preventDefault();   //prevents the page from refreshing when you click the "submit button"
      const name = this.state.name;
      let updatedListOfNames = this.state.listOfNames;
      updatedListOfNames.push(name);
      this.setState( {
          listOfNames: updatedListOfNames
      } )
      let text = this.refs.text;
      text = "";
      console.log("This is the new list of names: ", this.state.listOfNames);
  }
    
  handleDelete (event) {
      event.preventDefault();
      const number = parseInt(this.state.name);
      let updatedListofNames = this.state.listOfNames;
      updatedListofNames.splice(number-1,1);
      this.setState({
          listOfNames: updatedListofNames
      })
      let text = this.refs.text;
      text = "";
      console.log("This is the new list of names: ", this.state.listOfNames);
  }
    
  render() {
    const listOfNames = this.state.listOfNames;
    const name = listOfNames.map( ( name, i ) => (<li key={i}>{name}</li>))
    return (
      <div className="App">
        <p className="App-intro">
            To-Do List
        </p>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
                Add Item to the List: <br/>
                <input onChange={this.handleChange.bind(this)} type="text" name="name" />
            </label>
            <input type="submit" value="Add Item" />
        </form>
        <ol>
            { (name) ? name : null }
        </ol>
        <form onSubmit={this.handleDelete.bind(this)}>
            <label>
                Enter the number of the item you want to delete from the list: <br/>
                <input onChange={this.handleChange.bind(this)} type="text" name="name" />
            </label>
            <input type="submit" value="Delete Item" />
        </form>
      </div>
    
    );
  }
}

export default App;
