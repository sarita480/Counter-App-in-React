import { Component } from "react";
import './Counter.css'
import propsTypes from 'prop-types'



class Counter extends Component{
    
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