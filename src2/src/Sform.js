import React, { useState }  from "react";
import './App.css'



function Sform (props) {
  let [price, setCount] = useState(0);
  let [counter, setCounter] = useState(0);
  let handleClick = (e) => {
    // console.log(e.target);
    // console.log(e.target.checked);
    // console.log(e.target.value);
    // price = price + e.target.value;
    // console.log(price);
    if (e.target.checked) {
      setCount( price += parseInt(e.target.value) );
    }else{
      setCount( price -= parseInt(e.target.value) );
    }
  }
  
  let handleCounter = (e) => {
    setCounter( prevCounter => prevCounter++ );
  }
 

  console.log(props.burger)
  return (
    <div className="sform">
      <div className="sform__main" >
        <input type="radio" name="burger"  value={props.burger.smallBurger.price} onClick={handleClick}/> Маленький | цена: 35 ккал: 250<br/>
        <input type="radio" name="burger"  value={props.burger.bigBurger.price} onClick={handleClick}/> Большой | цена: 50 ккал: 340<br/>
        <hr />
        <input type="checkbox" name="inner"  value={props.burger.cheese.price} onClick={handleClick}/> сыр | цена: 4 ккал: 25<br/>
        <input type="checkbox" name="inner"  value={props.burger.ham.price} onClick={handleClick}/> ветчина | цена: 10 ккал: 50<br/>
        <input type="checkbox" name="inner"  value={props.burger.salad.price} onClick={handleClick}/> салат | цена: 5 ккал: 5<br/>
        <hr />
        <input type="checkbox" id={props.burger.sous} value={props.burger.sous.price} onClick={handleClick}/> соус | цена: 5 ккал: 0<br/>
        <input type="checkbox" id={props.burger.mazik} value={props.burger.mazik.price} onClick={handleClick}/> мазик | цена: 4 ккал: 10<br/>
        {/* <button onClick={handleCount}>Price</button> */}
        <p>{price}</p>
        <button onClick={handleCounter}>+1</button>
        <p>{counter}</p>
      </div>
    </div>
  );
  
}

export default Sform;

