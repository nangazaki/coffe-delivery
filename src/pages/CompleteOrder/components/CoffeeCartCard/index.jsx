import { ActionsContaioner, CoffeeCardCartContainer, RemoveButton } from "./style";
import QuantityInput from "../../../../components/QuantityInput/index"
import { Trash } from "phosphor-react";
import { useCart } from "../../../../hooks/useCart";

export function CoffeeCartCard({ coffee }) {
  const { changeItemQuantity, removeItemInCart } = useCart()

  function handleIncrease() {
    changeItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeItemInCart(coffee.id)
  }

  const Total = coffee.quantity * coffee.price

  return <CoffeeCardCartContainer>
    <div>
      <img src={`/coffees/${coffee.photo}`} />
      <div>
        <span>{coffee.name}</span>
        <ActionsContaioner>
          <QuantityInput onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={coffee.quantity} />
          <RemoveButton onClick={handleRemove}>
            <Trash size={16} />
            REMOVER
          </RemoveButton>
        </ActionsContaioner>
      </div>
    </div>
    <p>{Total} AOA</p>
  </CoffeeCardCartContainer>
}