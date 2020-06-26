import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// let city = {
//     name: "Madrid",
//     country:'Spain',
// };

// function Hello(props) { //This is components, captalized
//   console.log(props);
//   return (
//     <div>
//       <h1>Welcome to {props.library}!!</h1>
//       <p>{props.message}</p>
//       <p>{props.number}</p>
//     </div>
    
//   )};
// function Lake({name}) {
//   return (
//   <h1>{name}</h1>
//   )
// }

// const lakeList = [
//   {id:"1",name:"Echo",trailhead:"Echo"},
//   {id:"2",name:"Maud",trailhead:"Wrigts"},
//   {id:"3",name:"Velma",trailhead:"Bayview"},
// ];
// const Lake = () => {
//   <h1>Lake!</h1>
// };

// const SkiResort = () => {
//   <h1>Ski Resort!</h1>
// };
function GitHubUser({login}) {
  const [data,setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  },[]);
  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100}></img>
      </div>
    );
  }
  return null;
}

//this is App component
function App() {
  
  return ( 
    <GitHubUser login='jonriber'/>
  );
};

ReactDOM.render(
  <App/>, //using component App
  // <Hello library="React" message ="Have fun" number = {3}/>,
  // <h1 id='heading' className='cool-text'>Hello from {city.name} in {city.country} </h1>,
  document.getElementById('root')
);


