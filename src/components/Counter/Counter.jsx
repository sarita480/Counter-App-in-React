import React, { Component } from "react";
import './Counter.css'


class Counter extends Component
{
    constructor()
{
    //Don't forget to call super.
    super();
    this.state =
    {
        counter : 0
    }
    this.increment = this.increment.bind(this);
}
    render()
    { 
    return
    (
           <div className="counter">
                <button onClick={this.increment} >+1</button>
                <span className="count">{this.state.counter}</span>   
            </div>
    );
}
//Once we mover our funciton inside the Component we don't need to use function keyword and if you want to call locally defined method you need to
//use this keyword
//to use method inside the component we need to bind this method to int component constructor
increment()
{
    //Console.log("incremented")
   // this.state.counter++ //Bad practice (in react you don't update the state direclty)
   //you need to pass an object to setState method to update the state
   this.setState({
        counter: this.state.counter+1
    });
}
}

export default Counter
