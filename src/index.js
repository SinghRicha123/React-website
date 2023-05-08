import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './card';
import sdata from './sdata';

// function ncard(val){
//   return (

//   <Card imgSrc={val.imgSrc} 
//   title={val.title}
//   sname={val.sname}
//   link={val.link}/>

//  )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 className="heading">Top 5 Netflix serise Movie</h1>
  <div className="outer">
 {sdata.map(val =>{
  return (
    <Card 
    key={val.id}
  imgSrc={val.imgSrc} 
  title={val.title}
  sname={val.sname}
  link={val.link}/>
  )
 })}
 </div>
 </>

);


