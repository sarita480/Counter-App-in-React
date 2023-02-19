import { Component } from "react";
import './Counter.css'



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
                <button onClick={this.increment} >+1</button>
                <span className="count">{this.state.counter1}</span>
                </div>
            
        )
    }

    increment()
    {
        this.setState({
            counter1:this.state.counter1+1
    })
    }
}
export default Counter