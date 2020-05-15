// create your App component here

import React from "react";

export default class App extends React.Component {

    state = {

    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(data => {
            this.setState({astronauts: data});
        })
        .catch(err => console.err("Error", err));
    }

    render(){
        return (
            <div></div>
        )
    }
}