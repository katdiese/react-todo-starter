//replaces module.exports
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    //if you pass in props, super has to be in the first line, has to use props, extends from component
    super(props);

    this.id = 0;

    this.state = {
      id: this.id,
      text: '',
      done: false
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ text: event.target.value })
  }

  onAddClick() {
    this.id++;
    this.props.add(this.state);
    this.setState({ text: '', id: this.id });
  }

  render() {
    //returns multiple items of html
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value= {this.state.text}
          onChange={this.onInputChange.bind(this)}
        />
        <span className="input-group-btn">
          <button
          type="button"
          className="btn btn-success"
          onClick={this.onAddClick.bind(this)}
          >
            Add
          </button>
        </span>
      </div>
      );
  }
}

export default Header;

//Could also use -->
// export default class Header extends Component{}