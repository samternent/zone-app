import React from 'react';

export default class App extends React.Component {
  handleLogin() {
    const { onLogin } = this.props;
    const username = this.refs.username.value;

    onLogin({ username, loggedIn: true });
  }

  render() {
    return (
      <div>
        this is the login component
      </div>
    );
  }
}
