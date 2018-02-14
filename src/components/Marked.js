import React, {Component} from 'react';
import marked from 'marked';
import './style.css';

class Marked extends React.Component {
  constructor (props){
    super(props);
  }

// function that takes the content passed from the App parent component as props and
// turns it into markdown, which is passed to the returned div
  getMarkdownText=() => {
    var rawMarkup = marked(this.props.content, {sanitize: true});
    marked.setOptions({
    	renderer: new marked.Renderer(),
    	gfm: true,
    	tables: true,
    	breaks: false,
    	pedantic: false,
    	sanitize: true,
    	smartLists: true,
    	smartypants: false
    });
    return { __html: rawMarkup };
  }

  render() {
    return <div className="container">
      <p className="container-titles">Markdown</p>
      <span dangerouslySetInnerHTML={this.getMarkdownText()} />;
    </div>;
  }
}

export default Marked;
