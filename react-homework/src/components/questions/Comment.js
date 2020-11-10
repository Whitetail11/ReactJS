import React from "react";
export default function Comment({comment, questionId}) {
    return (
        <div className="card-footer text-muted">{comment[0].title}</div>
    )
}