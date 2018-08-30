import React, { Component } from 'react';
const rest = require('rest');
const mime = require('rest/interceptor/mime');
const getUser = user => rest.wrap(mime)(`https://api.github.com/users/${user}`)

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} }
  }
  componentDidMount() {
    getUser('ry').then(data => {
      this.setState({ user: data.entity })
    })
  }
  render() {
    const { user } = this.state

    return (
      <div>
        <ul>
          {
            Object.keys(user).map(key => renderLine(user, key))
          }
        </ul>

      </div>
    );
  }
}

export default App;
