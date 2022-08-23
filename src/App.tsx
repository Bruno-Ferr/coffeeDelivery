import { Header } from "./components/Header"

import CoffeeImg from './assets/Imagem.png'

import './App.scss';
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeCard } from "./components/CoffeeCard";
import { coffees } from "./context/useCart";

function App() {

  return (
    <>
      <Header />
      <main className="home">
        <div className="introBackground">
          <div className="intro">
            <div className="texts">
              <div className="title">
                <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
              </div>
              <div className="items">
                <div className="item">
                  <div className="icon" style={{background: '#C47F17'}}>
                    <ShoppingCart size={16} weight="fill" color="#FFF" />
                  </div>
                  <p>Compra simples e segura</p>
                </div>
                <div className="item">
                  <div className="icon" style={{background: '#574F4D'}}>
                    <Package size={16} weight="fill" color="#FFF" />
                  </div>
                  <p>Embalagem mantém o café intacto</p>
                </div>
                <div className="item">
                  <div className="icon" style={{background: '#DBAC2C'}}>
                    <Timer size={16} weight="fill" color="#FFF" />
                  </div>
                  <p>Entrega rápida e rastreada</p>
                </div>
                
                <div className="item" >
                  <div className="icon"style={{background: '#8047F8'}}>
                    <Coffee size={16} weight="fill" color="#FFF" />
                  </div>
                  <p>O café chega fresquinho até você</p>
                </div>
              </div>
            </div>
            <img src={CoffeeImg} alt="" />
          </div>
        </div>
        <div className="coffeeList">
          <h3>Nossos cafés</h3>
          <div className="list">
            { coffees.map(coffee => { 
              return <CoffeeCard coffee={coffee}/>
            })
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default App
