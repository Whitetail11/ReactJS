import React from "react";
import Comment from './Comment'

const Comments = ({ question, questionId, }) => {

  return question.comments.map((comment, index) => (
    <Comment comment={comment} key={index} questionId={questionId} />
  ));
};

export default (Comments);
