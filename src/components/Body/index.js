import React, { Component } from 'react';

class Body extends Component {
  constructor() {
    super();
    this.state = { login: '' };
  }

  onInputChange = e => {
    this.setState({ login: e.target.value });
  };

  onLogIn = () => {
    alert(`Hello, ${this.state.login}`);
    this.setState({ login: '' });
  };

  render() {
    return (
      <div>
        Login:{' '}
        <input
          type="text"
          value={this.state.login}
          onChange={this.onInputChange}
        />
        <br />
        <button onClick={this.onLogIn}>Войти</button>
      </div>
    );
  }
}

export default Body;
