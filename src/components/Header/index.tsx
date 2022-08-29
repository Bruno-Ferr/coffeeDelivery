import { MapPin, ShoppingCart } from "phosphor-react";
import './styles.scss'

import logo  from '../../assets/Logo.png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/useCart";

export function Header() {
  const { cart } = useContext(CartContext)
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="navbar">
        <div className="location">
          <MapPin size={22} weight="fill" />
          <p>São Paulo, SP</p>
        </div>
        <Link to="/checkout"  className="cart">
          <ShoppingCart size={22}  weight="fill" />
          {
            cart.length > 0 && (
              <div className="items-counter">{cart.length}</div>
            )
          }
        </Link>
      </div>
    </header>
  )
}