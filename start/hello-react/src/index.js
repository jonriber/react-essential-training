import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
    name: "Madrid",
    country:'Spain',
};

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
const lakeList = [
  {id:"1",name:"Echo",trailhead:"Echo"},
  {id:"2",name:"Maud",trailhead:"Wrigts"},
  {id:"3",name:"Velma",trailhead:"Bayview"},
];

function App({lakes}) {
  return (
    <div>
      {lakes.map(lake => (
        <div key={lake.id}>
          <h2>{lake.name}</h2>
          <p>Accessed by: {lake.trailhead}</p>
        </div>
      ))};
    </div>
  );
  
};

function SkiResort(){
  return(
    <div>
      <h1>Visit JacksonHole Mountain Resort</h1>
    </div>
  )
};

ReactDOM.render(
  <App lakes = {lakeList}/>,
  // <Hello library="React" message ="Have fun" number = {3}/>,
  // <h1 id='heading' className='cool-text'>Hello from {city.name} in {city.country} </h1>,
  document.getElementById('root')
);


