import { MapPin, ShoppingCart } from "phosphor-react";
import './header.scss'

import logo  from '../../assets/Logo.png'

export function Header() {
  return (
    <header>
      <img src={logo} alt="" />
      <div className="navbar">
        <div className="location">
          <MapPin size={22} weight="fill" />
          <p>São Paulo, SP</p>
        </div>
        <button className="cart">
          <ShoppingCart size={22}  weight="fill" />
        </button>
      </div>
    </header>
  )
}