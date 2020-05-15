import React from 'react'
import Space from './Space'

class App extends React.Component {
    
    state = { 
        peopleInSpace: []
     }

     componentDidMount() {
         fetch('http://api.open-notify.org/astros.json')
         .then(response => response.json())
         .then(data => { 
             this.setState({
                peopleInSpace: data.people
             })
         })
     }


    render() { 

        return (
            <div className='container'>
              {this.state.peopleInSpace.map((person, index) => <Space person={person} key={index} />)}  
            </div>     
        );
    }
}
 
export default App;
