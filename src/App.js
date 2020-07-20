import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jobs from './components/jobs'

class App extends Component {
  state={
    server: 'https://personal-portfolio-server.irvinfiz.now.sh/graph',
    jobs: []

  }

  async componentDidMount(){
    const query = `query{
      jobs {
        _id
        name
        link
        type
        logo
      }
    }`

    const url = this.state.server;
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };
    const res = await fetch(url, opts);
    const data = await res.json();
    console.log(data.data.jobs)
    this.setState({jobs: data.data.jobs })
  }


  render(){
    return (
      <div className="App">
        <Jobs></Jobs>
      </div>
    );
  }
}

export default App;
