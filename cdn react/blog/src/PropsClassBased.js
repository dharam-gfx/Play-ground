import React from 'react';

class PropsClassBased extends React.Component {
    render(){
        return (
            <div>
                <h1> Props Class </h1>
                <h2>Props Class: {this.props.name}</h2>
            </div>
        )
    }
}

export default PropsClassBased;