import React, { Component } from 'react';
import rest from 'rest';
import mime from 'rest/interceptor/mime';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} }
  }
  componentDidMount() {
    const getUser = user => rest.wrap(mime)(`https://api.github.com/users/${user}`)
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
