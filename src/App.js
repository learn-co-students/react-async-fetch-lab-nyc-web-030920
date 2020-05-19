// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    
    state={
        people: []
    }


    componentDidMount(){
        fetch(`http://api.open-notify.org/astros.json`)
        .then(r => r.json())
        .then(people => this.setState({
            people: people
        }))
    }
    
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

