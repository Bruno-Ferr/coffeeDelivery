import { createContext, ReactNode, useState } from "react";

import coffee from '../assets/TradImage.png'
import ImageCoffee1 from '../assets/coffee.png'
import ImageCoffee2 from '../assets/coffee-1.png'
import ImageCoffee3 from '../assets/coffee-2.png'
import ImageCoffee4 from '../assets/coffee-3.png'
import ImageCoffee5 from '../assets/coffee-4.png'
import ImageCoffee6 from '../assets/coffee-5.png'
import ImageCoffee7 from '../assets/coffee-6.png'
import ImageCoffee8 from '../assets/coffee-7.png'
import ImageCoffee9 from '../assets/coffee-8.png'
import ImageCoffee10 from '../assets/coffee-9.png'
import ImageCoffee11 from '../assets/coffee-10.png'
import ImageCoffee12 from '../assets/coffee-11.png'
import ImageCoffee13 from '../assets/coffee-12.png'

type CoffeesProps = {
  id: number;
  url: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
  stock: number;
}[]

type CartProps = {
  id: number;
  url: string;
  title: string;
  price: number;
  amount: number;
}[]

interface ICartContext {
  cart: CartProps,
  totalPrice: number,
  handleAddToCart: (productId: number) => void;
  handleRemoveFromCart: (productId: number) => void;
  updateTotalPrice: () => void;
  setTotalPrice: (price: number) => void;
}

interface ICartContextProvider {
  children: ReactNode
}

export const coffees:CoffeesProps = [
  {
    id: 1,
    url: coffee,
    tags: ["tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 5.90,
    stock: 1,
  },
  {
    id: 2,
    url: ImageCoffee4,
    tags: ["tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.99,
    stock: 5,
  },
  {
    id: 3,
    url: ImageCoffee8,
    tags: ["tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 7.90,
    stock: 5,
  },
  {
    id: 4,
    url: ImageCoffee11,
    tags: ["tradicional", "Gelado"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
    stock: 10,
  },
  {
    id: 5,
    url: ImageCoffee1,
    tags: ["tradicional", "com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
    stock: 7,
  },
  {
    id: 6,
    url: ImageCoffee5,
    tags: ["tradicional", "com leite"],
    title: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
    stock: 2,
  },
  {
    id: 7,
    url: ImageCoffee9,
    tags: ["tradicional", "com leite"],
    title: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
    stock: 5,
  },
  {
    id: 8,
    url: ImageCoffee12,
    tags: ["tradicional", "com leite"],
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
    stock: 4,
  },
  {
    id: 9,
    url: ImageCoffee2,
    tags: ["tradicional", "com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
    stock: 9,
  },
  {
    id: 10,
    url: ImageCoffee6,
    tags: ["Especial", "com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90,
    stock: 8,
  },
  {
    id: 11,
    url: ImageCoffee10,
    tags: ["especial", "alcoólico", "gelado"],
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
    stock: 8,
  },
  {
    id: 12,
    url: ImageCoffee13,
    tags: ["especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
    stock: 5,
  },
  {
    id: 13,
    url: ImageCoffee3,
    tags: ["especial"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
    stock: 5,
  },
  {
    id: 14,
    url: ImageCoffee7,
    tags: ["especial", "alcoólico"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
    stock: 1,
  }
]

export const CartContext = createContext({} as ICartContext)

export function CartContextProvider({ children }: ICartContextProvider) {
  const [cart, setCart] = useState<CartProps>([])
  const [totalPrice, setTotalPrice] = useState(0)

  function handleAddToCart(productId: number) {
    const productAlreadyInCart = cart.find(product => product.id === productId)

    if(!productAlreadyInCart) {
      const [{ id, url, title, price }] = coffees.filter(coffee => coffee.id === productId)

      const newProduct = { 
        id,
        url,
        title,
        price,
        amount: 1
      }

      setCart([...cart, newProduct])
    } else {
      const [{ stock }] = coffees.filter(coffee => coffee.id === productId)

      if (stock > 0) {
        const updateCart = cart.map(product => product.id === productId ? {
          ...product,
          amount: product.amount + 1
        }: product)
        
        setCart(updateCart)
      }
    }
  }

  function handleRemoveFromCart(productId: number) {
    const productAlreadyInCart = cart.find(product => product.id === productId)

    if(productAlreadyInCart) {
      const [{ amount }] = cart.filter(coffee => coffee.id === productId)

      if( amount > 1) {
        const updateCart = cart.map(product => product.id === productId ? {
          ...product,
          amount: product.amount - 1
        }: product)

        setCart(updateCart)
      } else {
        const removeProduct = cart.filter(product => product.id !== productId)

        setCart(removeProduct)
      }
    }
  }
 
  function updateTotalPrice() {
    const price = cart.map(product => product.amount * product.price).reduce((prev, curr) => prev + curr, 0)

    console.log(price)

    setTotalPrice(() => { return price })
  }

  return (
    <CartContext.Provider value={{ cart, totalPrice, handleAddToCart, handleRemoveFromCart, setTotalPrice, updateTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}