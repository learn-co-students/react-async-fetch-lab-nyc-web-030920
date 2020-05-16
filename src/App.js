import React, { Component } from 'react';

class App extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(({ people }) => {
                this.setState({ people });
            })
    }

    render() {
        return (
            <div>
                {this.state.people.map((person, id) => <p key={id}>{person.name}</p>)}
            </div>
        )
    }
}

export default App;