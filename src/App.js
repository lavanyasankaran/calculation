import React from 'react';




class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { num1: '', num2: '', total: '' }
  }


  add(){
    
    this.setState({ total: parseInt(this.state.num1) + parseInt(this.state.num2) })
    
  }
  sub(){
    
    this.setState({ total: this.state.num1 - this.state.num2 })
    
  }
  mul(){
    
    this.setState({ total: this.state.num1 * this.state.num2 })
    
  }
  div(){
    
    this.setState({ total: this.state.num1 / this.state.num2 })
    
  }

  render() {
    return(
      <div className="mainContainer">
        <h1>  Numbers</h1>

        <input type="number" className="inputStyle"  onChange={ (eve) => { this.setState({ num1: eve.target.value }) } }required/>
        <br/><br/>

        <input type="number" className="inputStyle"  onChange={ (eve) => { this.setState({ num2: eve.target.value })} }required />
        <br/><br/>

        <button onClick={()=>{this.add()}} >Add </button>
        <button onClick={()=>{this.sub()}} >sub </button>
        <button onClick={()=>{this.mul()}} >mul</button>
        <button onClick={()=>{this.div()}} >div</button>
        <br/><br/>

        
        <input type="number" className="outStyle" value={this.state.total} />

        <br/><br/>
      </div>
    )
  }
}




export default App;
