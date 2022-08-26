

export function Purchase() {
  return (
    <div>
      <div>
        <h3>Complete seu pedido</h3>
        <form>
          <div>
            <label htmlFor="">Endereço de entrega</label>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Pagamento</label>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </form>
      </div>
      <div>
        <h3>Cafés selecionados</h3>
        <div>
          {/* Items do carrinho */}
          <div>
            <div>
              <p>Total de itens</p>
              <p>R$Valor Total</p>
            </div>
            <div>
              <p>Taxa de entrega</p>
              <p>R$ 5,20</p>
            </div>
            <div>
              <h2>Total</h2>
              <p>R$ Soma = entrega + valor total</p>
            </div>
            <button>
              Confirmar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}