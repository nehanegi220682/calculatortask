import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    val:"",
   res:""
};

 /* constructor()
  {
    super();
    this.handlebutton = this.handlebutton.bind(this);
  }

  */
handlebutton(a)
  {
  this.setState({val : this.state.val += a});
   }


evaluate()
{
 this.setState({val : eval(this.state.val)});

}

clearall()
{
  this.setState({val : ""});
}

 render() {
  return (
 <div className = "calc">
    <div className = "screen">
        <p className="description" id = "Bb01" >{this.state.val}</p>
    </div>
    <div className = "abc">
         <button  id = "B01" onClick = {()=>{this.clearall()}} className = "btn btn-md"> clear</button>
         <button type="button" onClick={()=>{this.handlebutton("0")}} > 0 </button>
         <button type="button" onClick={()=>{this.handlebutton("/")}}className="btn btn-danger">/</button>
    </div>
    
    <div className = "calckey">
       <div className = "btns">
    
          <button type="button" onClick={()=>{this.handlebutton("7")}} > 7 </button>
          <button type="button" onClick={()=>{this.handlebutton("8")}} >8</button>
          <button type="button" onClick={()=>{this.handlebutton("9")}}>9</button>
          <button type="button"onClick={()=>{this.handlebutton("-")}} className="btn btn-danger">-</button>

        </div>
        <div className = "btns">
    
           <button type="button"  onClick={()=>{this.handlebutton("4")}}>4</button>
           <button type="button" onClick={()=>{this.handlebutton("5")}} >5</button>
           <button type="button" onClick={()=>{this.handlebutton("6")}} >6</button>
           <button type="button" onClick={()=>{this.handlebutton("+")}} className="btn btn-danger">+</button>
   
         </div>
    <div  className = "btns">
   
        <button type="button"  onClick={()=>{this.handlebutton("1")}}>1</button>
        <button type="button" onClick={()=>{this.handlebutton("2")}} >2</button>
        <button type="button" onClick={()=>{this.handlebutton("3")}} >3</button>
        <button type="button"  onClick={()=>{this.evaluate()}} className="btn btn-danger">=</button>
   
    </div>
   </div>
 </div>

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}
}


export default App;
