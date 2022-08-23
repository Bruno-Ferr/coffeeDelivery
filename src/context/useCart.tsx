import { Children, createContext, ReactNode, useState } from "react";

type CoffeesProps = {
  url: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
  amount: number;
}[]

type CartProps = {
  url: string;
  title: string;
  price: number;
  amount: number;
}[]

interface ICartContext {
  cart: CartProps,
  totalPrice: number,
}

export const coffees:CoffeesProps = [
  {
    url: "",
    tags: ["tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
    amount: 1,
  },
  {
    url: "",
    tags: ["tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
    amount: 5,
  },
  {
    url: "",
    tags: ["tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
    amount: 5,
  },
  {
    url: "",
    tags: ["tradicional", "Gelado"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
    amount: 10,
  },
  {
    url: "",
    tags: ["tradicional", "com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
    amount: 7,
  },
  {
    url: "",
    tags: ["tradicional", "com leite"],
    title: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
    amount: 2,
  },
  {
    url: "",
    tags: ["tradicional", "com leite"],
    title: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
    amount: 5,
  },
  {
    url: "",
    tags: ["tradicional", "com leite"],
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
    amount: 4,
  },
  {
    url: "",
    tags: ["tradicional", "com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
    amount: 9,
  },
  {
    url: "",
    tags: ["Especial", "com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90,
    amount: 8,
  },
  {
    url: "",
    tags: ["especial", "alcoólico", "gelado"],
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
    amount: 8,
  },
  {
    url: "",
    tags: ["especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
    amount: 5,
  },
  {
    url: "",
    tags: ["especial"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
    amount: 5,
  },
  {
    url: "",
    tags: ["especial", "alcoólico"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
    amount: 1,
  }
]

const CartContext = createContext({} as ICartContext)

export function CartContextProvider(children: ReactNode) {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  function handleIncreaseAmount() {

  }

  function handleDecreaseAmount() {
    
  }
 
  function updateTotalPrice() {

  }

  return (
    <CartContext.Provider value={{ cart, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}