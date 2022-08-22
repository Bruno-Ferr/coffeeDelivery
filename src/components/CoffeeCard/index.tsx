import { Minus, Plus, ShoppingCart } from "phosphor-react";

import './CoffeeCard.scss'

import CoffeeImg from '../../assets/Image.png'
import { useState } from "react";

export function CoffeeCard() {
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
      <img src={CoffeeImg} alt="" />
      <div className="tag">
        {/* Map com as tags */}
        <h3>Tradicional</h3>
      </div>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div className="buy">
        <h2>R$<span>9,90</span></h2>
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