//equal to var react = require('react');
import React from 'react';
//go into react and find something called component, assign it as variable component
import { Component } from 'react';

import Header from './Header';
import List from './List';

//classes are for more complicated components, called app, extends component from react, can call things from react component object
//every single react component MUST have a render() function
//jsx is the ability to write html in an js file (biggest difference is that you must write className instead of class)
//You need to first find a plan of attack to create your components before you create your components -- components are meant to be reusable
export default class App extends Component {
  constructor(props) {
    super(props);

    this.onAddClick = this.onAddClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);

    this.state = {
      items: [],
    };
  }

  onAddClick(newItem) {
    this.setState({
      items: this.state.items.concat([newItem])
    });
  }

  onDeleteClick(id) {
    const newItem = this.state.items.slice();
    const index = newItem.map((x) => {
      return x.id
    }).indexOf(id);
    newItem.splice(index, 1);
    this.setState({ items: newItem });
  }

  render() {
    return (
      <div className="text-center">
        <h1>My Todo List</h1>
        <Header add={this.onAddClick} />
        <List delete={this.onDeleteClick} items={this.state.items}/>
      </div>
    );
  }
}
