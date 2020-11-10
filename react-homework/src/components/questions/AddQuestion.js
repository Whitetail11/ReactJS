import React from "react";
import {connect} from 'react-redux'
import {createQuestion} from '../../redux/actions'
import { withRouter } from "react-router-dom";
//{id: 1, title: 'title', counterView: 1, counterAnswers: 1, authorName: 'author', dateTime: 'datetime'},
class AddQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      authorName: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    const {
        title,
        body,
        authorName
    } = this.state;
    let newQuestion = {
        id: Date.now().toString(),
        title,
        body,
        authorName,
        counterView: 0,
        counterAnswers: 0,
        comments: [],
        dateTime: new Date(Date.now())
    }
    this.props.createQuestion(newQuestion)
    this.setState({title: '', body: '', authorName: ''})
    this.props.history.push("/")
  };
  changeInputHandler = event => {
    this.setState(prev => ({...prev, ...{
        [event.target.name]: event.target.value
    }}))
  }
  render() {
    return (
      <div className="container pt-3">
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title">Заголовок</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={this.state.title}
              name="title"
              onChange={this.changeInputHandler}
            />
            <label htmlFor="name">Ваше имя</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.authorName}
              name="authorName"
              onChange={this.changeInputHandler}
            />
            <label htmlFor="question">Задайте вопрос</label>
            <textarea
              type="text"
              className="form-control"
              id="question"
              value={this.state.body}
              name="body"
              onChange={this.changeInputHandler}
            />
          </div>
          <button className="btn btn-success">Create</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
    createQuestion
}
export default withRouter(connect(null, mapDispatchToProps)(AddQuestion))