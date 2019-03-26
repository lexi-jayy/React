import React, { Component } from 'react';
import './App.css';
import Content from './Content.js';

class App extends Component {
  constructor (props){
    super(props);
    this.state={
      item: [],
      isLoaded: false
    }
  }
  componentDidMount(){
    fetch('https://my.api.mockaroo.com/person.json?key=5be81a40')
    .then(res=>res.json())
    .then(json=>{
      this.setState({
        isLoaded:true,
        items:json
      })
    })

  }
  changeCss(event){
    // event.currentTarget.style.background = 'tomato';
    event.currentTarget.style.display = 'none';
  }
  render() {
    var {isLoaded,items} =this.state;
    if(!isLoaded){
      return(
        <div>'......loading...'</div>
      )
    } else {
      return(
        <div className='row'>
          <ul>
            {items.map(item=>(
            <li className='myList'> key={item.id} {item.first_name} |
           Email: {item.email} | Avatar: {item.avatar}
           <img src =  {item.avatar} alt=''/>
           <Content/>
           <button className='btn' onClick={this.changeCss}>
           Click Me</button>
           </li>
           ))}
          </ul>
        </div>
      );
    
    }


  }
}

export default App;
