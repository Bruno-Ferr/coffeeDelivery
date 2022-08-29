
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from 'phosphor-react';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/useCart';
import './purchase.scss';

export function Purchase() {
  const { cart, handleAddToCart, handleRemoveFromCart, totalPrice, updateTotalPrice, handleRemoveAllFromCart } = useContext(CartContext)
  const frete = 5.20
  
  useEffect(() => {
    if(cart !== undefined ) {
      updateTotalPrice()
    }
  }, [cart])

  function handleAddCoffee(id: number) {
    handleAddToCart(id)
  }

  function handleSubCoffee(id: number) {
    handleRemoveFromCart(id)

  }

  function handleRemoveProduct(id: number) {
    handleRemoveAllFromCart(id)
  }

  return (
    <div className="checkout">
      <div className='form-area'>
        <h3>Complete seu pedido</h3>
        <form>
          <div className='form'>
            <div className='form-delivery-title'>
              <MapPinLine size={22}/>
              <div className='form-title-infos'>
                <label htmlFor="">Endereço de entrega</label>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <div>
              <input type="text"placeholder='CEP' style={{width: '13rem'}} />
            </div>
            <div>
              <input type="text" placeholder='Rua' style={{width: '35rem'}} />
            </div>
            <div className='info'>
              <input type="text" placeholder='Número' style={{width: '13rem'}} />
              <input type="text" placeholder='Complemento' style={{width: '21.25rem'}}/>
            </div>
            <div className='info'>
              <input type="text" placeholder='Bairro' style={{width: '13rem'}} />
              <input type="text" placeholder='Cidade' style={{width: '17rem'}} />
              <input type="text" placeholder='UF' style={{width: '3.5rem'}}/>
            </div>
          </div>
          <div className='form'>
            <div className='form-delivery-title'>
              <CurrencyDollar size={22} color={'#8047F8'}/>
              <div className='form-title-infos'>
                <label htmlFor="">Pagamento</label>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div> 
            </div>
            <div>
              <select name="" id=""><option value=""><CreditCard size={16}/>CARTÃO DE CRÉDITO</option></select>
              <select name="" id=""><option value=""><Bank size={16} /> CARTÃO DE DÉBITO</option></select>
              <select name="" id=""><option value=""><Money size={16} /> DINHEIRO</option></select>
            </div>
          </div>
        </form>
      </div>
      <div className='orders'>
        <h3>Cafés selecionados</h3>
        <div className='checkout-items'>
        {cart.map(product => {
            return (
              <>
                <div className='coffee'>
                  <div className='coffee-info'>
                    <img src={product.url} />
                    <div className='coffee-details'>
                      <p>{product.title}</p>
                      <div className='coffee-actions'>
                        <div className='counter'>
                          <button onClick={() => handleSubCoffee(product.id)}>
                            <Minus size={14} />
                          </button>
                          <p>{product.amount}</p>
                          <button onClick={() => handleAddCoffee(product.id)}>
                            <Plus size={14} />
                          </button>
                        </div>
                        <button onClick={() => handleRemoveProduct(product.id)} className='remove-button'>
                          <Trash size={16} /> REMOVER
                        </button>
                      </div>
                    </div>
                  </div>
                  <h3>R$ {product.price * product.amount}</h3>
                </div>
                <div className='divider'></div>
              </>
            )
          })}
          <div className='values'>
            <div className='total-price'>
              <p>Total de itens</p>
              <p>R$ {totalPrice}</p>
            </div>
            <div className='total-price'>
              <p>Taxa de entrega</p>
              <p>R$ {frete}</p>
            </div>
            <div className='total-price'>
              <h2>Total</h2>
              <h2>R$ {totalPrice + frete}</h2>
            </div>
            <button className='confirm-order'>
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}