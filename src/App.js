import React, { Component } from 'react';
import TextArea from './components/TextArea';
import Marked from './components/Marked';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      textContent: 'Stuff',
      data:"Stuff"
    };
     this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  contentGetter = (dataFromChild) => {
    this.setState({data:dataFromChild});
    console.log("App - "+this.state.data);
  }

  handleDescriptionChange(e) {
    this.setState({ textContent: e.target.value });
    console.log(this.state.textContent);
  }

  render() {

    return (
      <div className="App">
        <TextArea placeholder='Input text' callbackpar = {this.contentGetter}/>
        <Marked content={this.state.data}/>
      </div>
    );
  }
}

export default App;
