// create your App component here
 import React from 'react';

 export default class App extends React.Component {
    state = {
        people: []
    }

    getPeople = () => {
        fetch("http://api.open-notify.org/astros.json").then(response => response.json()).then(data => this.setState({people: data.people}))
    }

    componentDidMount(){
        this.getPeople()
    }
     render(){
         console.log(this.state.people)
         return(
             <div> Hello world</div>
         )
     }
 }