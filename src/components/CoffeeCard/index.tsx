import { Minus, Plus, ShoppingCart } from "phosphor-react";

import './styles.scss'

import { useContext, useState } from "react";
import { CartContext } from "../../context/useCart";

interface ICoffeeProps {
  id: number;
  url: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
  stock: number;
}

interface ICoffeeCardProps {
  coffee: ICoffeeProps
}

export function CoffeeCard( { coffee }: ICoffeeCardProps) {
  const { handleAddToCart, handleRemoveFromCart, cart } = useContext(CartContext)
  const [ product ] = cart.filter(product => coffee.id === product.id)

  function handleAddCoffee(id: number) {
    handleAddToCart(id)
  }

  function handleSubCoffee(id: number) {
    if(product.amount !== 0) {
      handleRemoveFromCart(id)
    }
  }

  return (
    <div className="coffeeCard">
      <img src={coffee.url} alt="" />
      <div className="tag">
        { coffee.tags.map(tag => {
          return <h3 key={tag}>{tag.toUpperCase()}</h3> 
        })}
      </div>
      <h1>{coffee.title}</h1>
      <p>{coffee.description}</p>
      <div className="buy">
        <h2>R$<span>{coffee.price}</span></h2>
        <div className="actions">
          <div className="counter">
            <button onClick={() => handleSubCoffee(coffee.id)}>
              <Minus size={14} />
            </button>
            <span>{product !== undefined ? product.amount : 0}</span>
            <button onClick={() => handleAddCoffee(coffee.id)}>
              <Plus size={14} />
            </button>
          </div>
          <button className="finish"><ShoppingCart weight="fill" color="#FFF" /></button>
        </div>
      </div>
    </div>
  )
}