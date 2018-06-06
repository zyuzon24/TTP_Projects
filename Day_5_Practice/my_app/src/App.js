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
      updatedListOfNames.push({name, isStarred: false});
      
      this.setState( {
          listOfNames: updatedListOfNames
      } )
      let text = this.refs.text;
      text.value = "";
      console.log("This is the new list of names: ", this.state.listOfNames);
  }
    
  handleDelete (i,event) {
      event.preventDefault();
      /* you can also delete the item by doing
        updatedListOfNames.filter((item,i,array) => {return item !== array[i]})*/
      let updatedListofNames = this.state.listOfNames;
      updatedListofNames.splice(i,1);
      console.log("i is ", i);
      this.setState({
          listOfNames: updatedListofNames
      })
      console.log("This is the new list of names: ", this.state.listOfNames);
  }
    
  completedTask(event) {
      if(event.target.className === "checked"){
        event.target.className = "unchecked";

    } else {
        event.target.className = "checked";
    }
  }
    
  starName(i, event){
      let updatedListOfNames = this.state.listOfNames;
      if(updatedListOfNames[i].isStarred === false){
          event.target.src = "http://images.clipartpanda.com/clipart-star-RTA9RqzTL.png";
      } else {
          event.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2000px-Five-pointed_star.svg.png";
      }
      updatedListOfNames[i].isStarred = !updatedListOfNames[i].isStarred;
      this.setState({
        listOfNames: updatedListOfNames 
      });
  }

    
  render() {
    const listOfNames = this.state.listOfNames;
    const name = listOfNames.map( ( list, i ) => ( <li key={i} className="unchecked" onClick={this.completedTask.bind(this)}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2000px-Five-pointed_star.svg.png" height="15" align="left" onClick={this.starName.bind(this,i)}></img>
    {list.name}  <br/>
    <img src="https://image.flaticon.com/icons/svg/61/61155.svg" class="close-classic" height="15" align="left" onClick={this.handleDelete.bind(this,i)} ></img>
    
    </li>
        
      
    ))
    
    return (
      <div className="App">
        <p className="App-intro">
            To-Do List
        </p>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
                Add Item to the List: <br/>
                <input onChange={this.handleChange.bind(this)} type="text" name="name" ref= "text"/>
            </label>
            <input type="submit" value="Add Item" />
        </form>
        <ol>
            { (name) ? name : null }
        </ol>

      </div>
    
    );
  }
}

export default App;
