import React from "react";
import Question from "./Question";
import { connect } from "react-redux";

const QuestionsList = ({ questions }) => {
  if (!questions.length) {
    return <p className="text-center">Nothing questions here</p>;
  }
  return questions.map((question) => (
    <Question question={question} key={question.id} />
  ));
};

const mapStateToProps = state => {
    return {
        questions: state.questions.questions
    }
}
export default connect(mapStateToProps, null)(QuestionsList);
