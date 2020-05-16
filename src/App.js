// create your App component here
import React from 'react'

export default class App extends React.Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => setState({people: data}))
  }

  render() {
    return null
  }
}



// Create an App class component from scratch
// Write a componentDidMount method. Inside the method, send a fetch request to http://api.open-notify.org/astros.json, a free API that returns a list of people currently in space.
// Note: This lab uses some packages that need a relatively new version of node. If you've got [nvm][https://github.com/creationix/nvm], run nvm install node to update.
