import React, {Component} from 'react';
import TextArea from './components/TextArea';
import Marked from './components/Marked';
import './components/style.css';

//main app component
class App extends Component {
  constructor (props){
    super(props);
    // the state is initialized to the default content of the textarea
    this.state = {
      data:'# Heading\n\n## Sub-heading\n\n### Another deeper heading\n\nText attributes _italic_, *italic*, __bold__, **bold**, `monospace`.\n\nHorizontal rule:\n\n---\n\nBullet list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\nA [link](http://example.com).'
    };
  }

// this function is needed to transfer the data from the child component TextArea
// to the App parent - callbackpar is called inside TextArea to retrieve this data
  contentGetter = (dataFromChild) => {
    this.setState({data:dataFromChild});
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Markdown Previewer with ReactJS</h1>
        <TextArea placeholder='Input text'  callbackpar = {this.contentGetter} defaultval={this.state.data} rownumber="30" />
        <Marked content={this.state.data}/>
      </div>
    );
  }
}

export default App;
