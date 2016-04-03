import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.item.id,
      text: this.props.item.text,
      done: this.props.item.done
    }

    this.onDoneChange = this.onDoneChange.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  onDoneChange(event) {
    this.setState({done: event.target.checked})
  }

  onDeleteClick() {
    this.props.delete(this.state.id);
  }

  render() {
    return (
      <div className="input-group"
      style={{ paddingBottom: '10px' }}>
        <span className="input-group-addon">
          <input
            type="checkbox"
            checked={this.state.done}
            onChange={this.onDoneChange}
          />
        </span>
        <input
          type="text"
          className="form-control"
          defaultValue={this.state.text}
          disabled={this.state.done}
        />
        <span className="input-group-btn">
          <button
          className="btn btn-danger"
          enabled={this.state.done}
          onClick={this.onDeleteClick}
          >
            Delete
          </button>
        </span>
      </div>
    );
  }
}