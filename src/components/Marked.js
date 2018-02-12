// import React, { Component } from 'react';
//
//
// class Marked extends Component {
//   var marked = require('marked');
//   marked.setOptions({
//     renderer: new marked.Renderer(),
//     gfm: true,
//     tables: false,
//     breaks: false,
//     pedantic: false,
//     sanitize: false,
//     smartLists: false,
//     smartypants: false,
//     xhtml: false
//   });
//   let cont = marked (this.props.content);
//   render() {
//     return (
//       <div className="Marked">
//         <div>Div 2 {cont}</div>
//       </div>
//     );
//   }
// }

import React from 'react';
import marked from 'marked';

class Marked extends React.Component {
  getMarkdownText() {
    console.log("marked cont");
    var rawMarkup = marked(this.props.content, {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    console.log("marked starting");
    return <div dangerouslySetInnerHTML={this.getMarkdownText()} />
  }
}

export default Marked;
