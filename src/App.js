import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Heroes =['a','b','c','d'];
 const prodcuts = [
   {name:'Photoshop',price:'$50.99'},
   {name:'PDF Reader',price:'$0.99'},
   {name:'Illustrator',price:'$30.99'}
  ]
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> I am learning how to use react</p>
        
          <Users></Users>
        
     
       
        <Counter></Counter>
        <ul>
          {
            Heroes.map( nayok => <li>{nayok}</li>)
          }
        </ul>

          {
            prodcuts.map(product=><Products product={product}></Products>)
          }
        
      </header>
    </div>
  );
}
function Users(){
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => setUsers(data));
  },[])

  return(
    <div style={{border:'1px solid red'}}>
          {
            users.map(user=>  <h5>{user.name}</h5> )
          }
    </div>
  )
}
function Counter() {
  const [count,setCount] = useState(0);
  const handler =() =>{
    const newCount = count+1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handler}> increase </button>
    </div>
  )
}
function Person(props) {
  return(
    <div style = {{border :'1px solid red',margin:'20px',width:'500px'}}>
      <h2> Name: {props.name} </h2>
      <p> Marks : {props.mark} </p>
    </div>
  )
}
function Products(props) {
  let {name,price} = props.product;
  return(
    <div style = {{border :'1px solid red',margin:'20px',width:'500px',height:'250px',float:'left'}}>
      <h2> {name}</h2>
      <h4> {price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
