import React, { Component } from "react";

export default class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const id = Date.now();
    this.props.addChat({
      id,
      name: this.state.name,
      message: this.state.message,
      sent: true
    });
    this.setState({ message: "" })
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="bg-light">
        <div className="input-group">
          <div className="w-25 border-right">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Insert your name"
              className="form-control rounded-0 border-0 py-4 bg-light"
              required
            />
          </div>
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Type a message"
            className="form-control rounded-0 border-0 py-4 bg-light"
            autoComplete="off"
            required
          />
          <div className="input-group-append">
            <button type="submit" value="Submit" className="btn btn-link">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
