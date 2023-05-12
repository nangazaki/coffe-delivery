import React, { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeCard";
import { produce } from "immer"
import { useEffect } from "react";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeeInCart: (coffee: CartItem) => void;
  changeItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void;
  removeItemInCart: (cartItemId: number) => void;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffe_items:storage'

export function CartContextProvider({children}: CartContextProviderProps){
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })
  
  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem)=>{
    return total + cartItem.price * cartItem.quantity
  }, 0)
  

  function addCoffeeInCart(coffee: CartItem){
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    )

    const newCart = produce(cartItems, (draft) => {
      if(coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    })

    setCartItems(newCart);
  }

  function changeItemQuantity(cartItemId: number, type: 'increase' | 'decrease'){
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId)
      
      if(coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity = type === 'increase' ? item.quantity +1 : item.quantity - 1;
      }
    })

    setCartItems(newCart);
  }

  function removeItemInCart(cartItemId: number){
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      )
      
      if(coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return(
    <CartContext.Provider value={{
      cartItems, 
      cartQuantity, 
      cartItemsTotal,
      addCoffeeInCart, 
      changeItemQuantity, 
      removeItemInCart
    }}>
      {children}
    </CartContext.Provider>
  )
}