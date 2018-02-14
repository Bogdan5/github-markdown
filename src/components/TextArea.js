import React, {Component} from 'react';
import './style.css';

class TextArea extends Component {
  // function that retrieves the content in the textarea and passes it to the
  // parent App via the callbackpar function
  controlFunc = (e) => {
    this.props.callbackpar(e.target.value);
  }

  render(){
     return <div className="container">
       <p className="container-titles">Preview</p>
       <textarea
        className="form-input"
        onChange={this.controlFunc}
        defaultValue={this.props.defaultval}
        rows={this.props.rownumber}
        />
      </div>
  }
}

export default TextArea
