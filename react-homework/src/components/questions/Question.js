import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { incrementViews } from "../../redux/actions";

function Question({ question, incrementViews }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{question.title}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{question.counterView} Views</li>
          <li className="list-group-item">{question.counterAnswers} Answers</li>
          <li className="list-group-item">
            Published by {question.authorName}
          </li>
        </ul>
        <Link to={{
            pathname: `/question/${question.id}`,
            propsSearch: question
        }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              incrementViews(question);
            }}
          >
            View details
          </button>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  incrementViews,
};
export default connect(null, mapDispatchToProps)(Question);
