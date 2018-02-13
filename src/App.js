import React, {Component} from 'react';
import TextArea from './components/TextArea';
import Marked from './components/Marked';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      data:'# Heading\n\n## Sub-heading\n\n### Another deeper heading\n\nText attributes _italic_, *italic*, __bold__, **bold**, `monospace`.\n\nHorizontal rule:\n\n---\n\nBullet list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\nA [link](http://example.com).'
    };
  }

  contentGetter = (dataFromChild) => {
    this.setState({data:dataFromChild});
  }

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer with ReactJS</h1>
        <TextArea placeholder='Input text'  callbackpar = {this.contentGetter} defaultval={this.state.data} rownumber="40" colnumber="80"/>
        <Marked content={this.state.data}/>
      </div>
    );
  }
}

export default App;
