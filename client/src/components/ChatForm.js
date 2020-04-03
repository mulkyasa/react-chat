import React, { Component } from "react";

export default class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.addChat({message: this.state.value});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="bg-light">
        <div className="input-group">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Type a message"
            className="form-control rounded-0 border-0 py-4 bg-light"
          />
          <div className="input-group-append">
            <button type="submit" value="Submit" className="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
          </div>
        </div>
      </form>
    );
  }
}
