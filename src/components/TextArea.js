import React, {Component} from 'react';


class TextArea extends Component {
  controlFunc = (e) => {
    console.log("TextArea"+e.target.value)
    this.props.callbackpar(e.target.value);
  }

  // getCont = () =>this.props.callbackpar(this.newVar);

  render(){
     return <div className="textarea-container">
       <p>Preview</p>
       <textarea
        className="form-input"
        onChange={this.controlFunc}
        defaultValue={this.props.defaultval}
        rows={this.props.rownumber}
        cols={this.props.colnumber}
        />
      </div>
  }
}

export default TextArea
