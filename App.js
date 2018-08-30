import React, { Component } from 'react';
import { getUser } from './github';

const renderLine = (user,key)=> <li key={key}>{key}: {user[key]}</li>

class App extends Component {
  constructor(props){
    super(props);
    this.state = {user: {}}
  }
  componentDidMount(){
    getUser('pavilion2t').then(data=>{
      this.setState({user: data.entity})
    })
  }
  render() {
    const user = this.state
    return (
      <div>
        <ul>
          {
            Object.keys(user).map(key=>renderLine(user,key))
          }
        </ul>

      </div>
    );
  }
}

export default App;
