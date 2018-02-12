import React, { Component } from 'react';


class TextArea extends Component {
  controlFunc = (e) => {
    console.log("TextArea"+e.target.value)
    this.newVar=e.target.value;
  }

  getCont = () =>this.props.callbackpar(this.newVar);

  render(){
     return <textarea
      className="form-input"
      // style={props.resize ? null : {resize: 'none'}}
      // name={props.name}
      // rows={props.rows}
      // value={props.content}
      onChange={this.controlFunc}
      // callbackpar={this.getCont}
       />
  }
}
// const TextArea = (props) => (
//   <div className="form-group">
//     <label className="form-label">{props.title}</label>
//     <textarea
//       className="form-input"
//       style={props.resize ? null : {resize: 'none'}}
//       name={props.name}
//       rows={props.rows}
//       value={props.content}
//       onChange={props.controlFunc}
//       placeholder={props.placeholder} />
//   </div>
// );

// TextArea.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   rows: React.PropTypes.number.isRequired,
//   name: React.PropTypes.string.isRequired,
//   content: React.PropTypes.string.isRequired,
//   resize: React.PropTypes.bool,
//   placeholder: React.PropTypes.string,
//   controlFunc: React.PropTypes.func.isRequired
// };

export default TextArea
