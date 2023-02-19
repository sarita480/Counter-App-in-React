import { Component } from "react";
import './Counter.css'
import propsTypes from 'prop-types'

class Counter extends Component{
    render() {
        return (
          <div className="Counter">
          <CounterButton by={1}></CounterButton>
          <CounterButton by={5}></CounterButton>
          <CounterButton by ={10}></CounterButton>
          </div>
        
          
        );
}
}

class CounterButton extends Component{
    
    constructor()
    {
        super();
        this.state={
            counter1 : 0
        }
        this.increment =this.increment.bind(this)
    }
    render()
    {
        return(
            
                <div className="counter1"> 
                <button onClick={this.increment} >+{this.props.by}</button>
                <span className="count">{this.state.counter1}</span>
            
                </div>
            
        )
    }

    increment()
    {
        this.setState({
            counter1:this.state.counter1+this.props.by
    })
    }
}
Counter.defaultProps={
    by:1
}
Counter.propsTypes=
{
    by:propsTypes.number
}
export default Counter