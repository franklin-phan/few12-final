import React from 'react'

class Counter extends React.Component{ 
    constructor(props) {
      super(props)
      this.state = {count:0}
    }
    addOne() {
        this.setState({count: this.state.count + 1})
    }
    minusOne() {
        this.setState({count: this.state.count - 1})
      }
    
    render() {
      return (
  
        <div className="Counter">
           <h1> Likes: { this.state.count }</h1>

           <button onClick={(e) => {
                this.addOne()
            }}>Like</button>
             <button onClick={(e) => {
                this.minusOne()
            }}>Dislike</button>
          
          
        </div>
      );
    }
  }
  
  export default Counter;
  