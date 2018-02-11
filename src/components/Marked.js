import React, { Component } from 'react';

class Marked extends Component {
  var marked = require('marked');
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: false,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: false,
    smartypants: false,
    xhtml: false
  });
  let cont = marked (this.props.content);
  render() {
    return (
      <div className="Marked">
        <div>Div 2 {cont}</div>
      </div>
    );
  }
}

export default Marked;
