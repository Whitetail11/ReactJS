import React from "react";
import { connect } from "react-redux";
import { createCommetn } from "../../redux/actions";
import { withRouter } from "react-router-dom";

class AddComments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    const {
        title,
    } = this.state;
    let newComment = {
        title,
    }
    this.props.createCommetn(newComment,this.props.questionId)
    this.setState({title: ''})
  };
  changeInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };
  render() {
      return (
        <div className="container pt-3">
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title">Прокоментируйте</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={this.state.title}
              name="title"
              onChange={this.changeInputHandler}
            />
          </div>
          <button className="btn btn-success">Create</button>
        </form>
      </div>
      )
  }
}
const mapDispatchToProps = {
    createCommetn
}
export default withRouter(connect(null, mapDispatchToProps)(AddComments))