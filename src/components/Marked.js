import React, {Component} from 'react';
import marked from 'marked';

class Marked extends React.Component {
  constructor (props){
    super(props);
    // this.getMarkdownText = this.getMarkdownText.bind(this);
  }


  getMarkdownText=() => {
    // console.log("marked cont");
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
    return <div className="markdown">
      <p>Markdown</p>
      <span dangerouslySetInnerHTML={this.getMarkdownText()} />;
    </div>;
  }
}

export default Marked;
