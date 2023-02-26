import { Component } from "react";
import './Counter.css'
import propsTypes from 'prop-types'
import './bootstrap.css'

class Counter extends Component{

    constructor()
    {
        super();
        this.state=
        {
            counter : 0
        }
        this.increment =this.increment.bind(this)
    }
    render() {
        return (
          <div className="Counter">
             <CounterButton by={1} incrementMethod={this.increment}></CounterButton>
          </div>
        
          
        );
}
increment(by)
{
    this.setState({
       counter:this.state.counter+by
   //  console.log(`Increment from parent -${by}`)
     
})
}
}

class CounterButton extends Component
{
  constructor()
    {
        super();
        this.state={
            counter : 0
        }
        this.increment =this.increment.bind(this)
    }
    render()
    {
        return(
            
                <div className="counter1"> 
                    <button onClick={this.increment}>+{this.props.by}</button>
                    <span className="count">{this.state.counter}</span>
                
                </div>
            
        )
    }

    increment()
    {
        this.setState({
            counter:this.state.counter+this.props.by

    });
    this.props.incrementMethod(this.props.by)
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