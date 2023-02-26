import { Component } from "react";


class Counter1 extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            counter:0
        }

    }
    render()
    {
        return(
            <div>
                <h1>Hello</h1>
            </div>
        )
    }

}
export default Counter1