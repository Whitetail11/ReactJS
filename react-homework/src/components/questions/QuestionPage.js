import React from "react";
import { Link } from "react-router-dom";
import AddComment from "./AddComment";
import Comments from "./Comments";

function QuestionPage2({ location }) {
  return (
    <div className="container pt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{location.propsSearch.title}</h5>
          <div className="card-footer text-muted">{location.propsSearch.body}</div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Published by {location.propsSearch.authorName}
          </li>
          <li className="list-group-item">
            Comments:
            <Comments question={location.propsSearch} questionId={location.propsSearch.id} />
          </li>
        </ul>
      </div>
      <AddComment questionId={location.propsSearch.id}/>
      <div className="container pt-3">
        <Link to={`/`}>
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>
    </div>
  );
}
export default (QuestionPage2);
