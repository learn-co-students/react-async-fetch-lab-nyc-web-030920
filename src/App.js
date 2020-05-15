// create your App component here
import React from 'react'
const Query = 'http://api.open-notify.org/astros.json';

export default class App extends React.Component {
    state = {
        fetchResult: []
    }

    componentDidMount() {
        fetch(Query)
        .then(res => res.json())
        .then(({people}) => this.setState({ fetchResult: people }))
    }
    render () {
        console.log('State: ', this.state)
        return (
        this.state.fetchResult.map((people, index) => <p key={index}>{people.name}</p>)
        )
    }
}
