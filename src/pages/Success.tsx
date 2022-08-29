import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import './success.scss';
import Illustration from '../assets/Illustration.png';

export function Success() {
  return (
    <div className="success-page">
      <h2>Uhu! Pedido confirmado</h2>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <div className="success-container">
        <div className="success-infos">
          <div className="success-info">
            <div className="success-info-icon" style={{background: '#8047F8'}}>
              <MapPin size={16} weight="fill" color="#FFF" />  
            </div>
            <div className="success-info-title">
              <p>Entrega em <b>Rua João Daniel Martinelli, 102</b> Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div className="success-info">
            <div className="success-info-icon" style={{background: '#DBAC2C'}}>
              <Timer size={16} weight="fill" color="#FFF" /> 
            </div>
            <div className="success-info-title">
              <p>Previsão de entrega</p>
              <b>20 min - 30 min</b>
            </div>
          </div>
          <div className="success-info">
            <div className="success-info-icon" style={{background: '#C47F17'}}>
              <CurrencyDollar size={16} weight="fill" color="#FFF" />
            </div>
            <div className="success-info-title">
              <p>Pagamento na entrega</p>
              <b>Cartão de Crédito</b>
            </div>
          </div>
        </div>
        <div>
          <img src={Illustration} alt="" />
        </div>
      </div>
      
    </div>
  )
}