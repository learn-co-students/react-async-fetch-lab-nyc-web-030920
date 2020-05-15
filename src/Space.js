import React from 'react'

class Space extends React.Component {

    render() {
        console.log(this.props) 
        return (  
            <div>
                <p>Craft:{this.props.person.craft} - Astronaut: {this.props.person.name}</p>
            </div>
        );
    }
}
 
export default Space;