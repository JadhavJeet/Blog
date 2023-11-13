import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments =
    comments &&
    comments.map((comment) => {
      let content;

      switch (comment.status) {
        case "Approved":
          content = comment.content;
          break;

        default:
          content = "This comment is under moderation";
          break;
      }
      return <li key={comment.id}>{content}</li>;
    });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
