import React from 'react'
import Space from './Space'

class App extends React.Component {
    
    state = { 
        peopleInSpace: []
     }

     componentDidMount() {
         console.log(this.state)
         fetch('http://api.open-notify.org/astros.json')
         .then(response => response.json())
         .then(data => { 
             this.setState({
                peopleInSpace: data.people
             })
         })
     }

    //  renderAstronauts = (astronauts) => {
    //     console.log("Space Bois", astronauts)
    //  }

    render() { 
        console.log(this.state)
        // {this.state.map(person => {

        // })
        return (
            <div className='container'>
              {this.state.peopleInSpace.map((person, index) => <Space person={person} key={index} />)}  
            </div>     
        );
    }
}
 
export default App;
