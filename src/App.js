import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  change = (type) => {
  
    switch(type){
      case '+':
        this.setState({
          counter: this.state.counter + 1
        })
        break;

      case '-':
        if(this.state.counter - 1 < 0){
        this.setState({
        counter: 0 })
        } else {
        this.setState({
        counter: this.state.counter - 1
        })}
        break;
      case 'O':
        this.setState({
          counter: 0
        })
    }
  }
  

  render() {
    return (
      <div>
       <p>{this.state.counter}</p>
        <button onClick={()=> this.change('+')}>+</button>
        <button onClick={()=> this.change('O')}>O</button>
        <button onClick={()=> this.change('-')}>-</button>
      </div>
    );
  }
}

export default App;