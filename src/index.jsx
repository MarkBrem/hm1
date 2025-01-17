import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const name = 'Марко'
 const NameText = <h1>{name}</h1>
 const Welcome = <p>Ласкаво просимо до нашого сайту!</p>
 const Img = <img src='https://terra.vet/wp-content/uploads/55-11.jpg' alt='Собака'></img>

const obj =  {name: "Instagram", url: "https://www.instagram.com/"}
 const Link =  <a href={obj.url}>Посилання</a>

const num1 = 14
const num2 = 27

 const Sum = ()=>{
  const res = num1 + num2
  return <p>{res}</p>
}

const color = [
  { name: "Червоний",
    id: 1
   },
  { name: "Синій",
    id: 2
   },
  { name: "Зелений",
    id: 3
   },

 ];

 const ColorList = ()=>{
  return <ul>
  {color.map((color)=>{
    return <li key={color.id}><p>{color.name}</p></li>
  })}
  </ul>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {NameText}
  {Welcome}
  {Img}
  {Link}
  {Sum()}
  {ColorList()}
  </>
);
