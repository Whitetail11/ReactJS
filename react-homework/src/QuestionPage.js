import React from "react";
import { NavLink } from "react-router-dom";
import QuestionsList from "./components/questions/QuestionsList";

export default function QuestionPage() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <h1>Stack Overfflow</h1>
        </div>
        <div className="col">
        <NavLink to="/create" >
            <button className="btn btn-primary">Ask question </button>
        </NavLink>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Questions</h2>
          <QuestionsList />
        </div>
      </div>
    </div>
  );
}
