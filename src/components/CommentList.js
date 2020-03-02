import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments() {
    console.log("comments..", this.props.comments);
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.ab}
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(".....state....", state);
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
