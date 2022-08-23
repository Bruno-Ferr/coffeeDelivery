import { Minus, Plus, ShoppingCart } from "phosphor-react";

import './CoffeeCard.scss'

import CoffeeImg from '../../assets/Image.png'
import { useState } from "react";

interface ICoffeeProps {
  url: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
  amount: number;
}

export function CoffeeCard( coffee : ICoffeeProps) {
  const [counter, setCounter] = useState(0)

  function handleAddCoffee() {
    setCounter(counter + 1)
  }

  function handleSubCoffee() {
    if(counter !== 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="coffeeCard">
      <img src={coffee.url} alt="" />
      <div className="tag">
        { coffee.tags.map(tag => {
          return <h3>{tag}</h3> 
        })}
      </div>
      <h1>{coffee.title}</h1>
      <p>{coffee.description}</p>
      <div className="buy">
        <h2>R$<span>{coffee.price}</span></h2>
        <div className="actions">
          <div className="counter">
            <button onClick={() => handleSubCoffee()}>
              <Minus size={14} />
            </button>
            <span>{counter}</span>
            <button onClick={() => handleAddCoffee()}>
              <Plus size={14} />
            </button>
          </div>
          <button className="finish"><ShoppingCart weight="fill" color="#FFF" /></button>
        </div>
      </div>
    </div>
  )
}