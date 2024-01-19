import React  from "react";

class CounterClassBased extends React.Component {

    constructor(){
        super();
        this.state={
            count:0,
        }
    };

    increment(){
        this.setState({count:++this.state.count});
    };
    decrement(){
        if (this.state.count>0) {     
            this.setState({count:--this.state.count});
        }
    }

    render(){
        return (
            <div>
            <hr/>
                <h1>Class based Counter </h1>
                <h1>count- {this.state.count}</h1>
                <button onClick={()=>this.increment()}>increment</button>
                <button onClick={()=>this.decrement()}>decrement</button>
            </div>
        )
    }

}

export default CounterClassBased