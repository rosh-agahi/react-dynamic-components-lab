//your code here
import React, { Component } from 'react';

export default class Comment extends Component {

  render() {
    return (
      <div className="comment" style={{opacity: 1 }}>
        <p>{this.props.commentText}</p>
      </div>
    )
  }

}
