import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'ddd'};
  }
  render() {
    return (
    <div>
      <input
      value={this.state.term}
      onChange={еvent => this.setState({ term: event.target.value })}/>
    </div>
    );
  }


};

export default SearchBar;