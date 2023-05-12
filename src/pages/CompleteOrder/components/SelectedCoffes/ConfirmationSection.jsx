import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { ConfirmationSectionContainer } from "./style";

const DELIVERY_PRICE = 700

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const cartTotal = cartItemsTotal + DELIVERY_PRICE

  return (
    <ConfirmationSectionContainer>
      <div>
        <span className="regular-m">Total de itens</span>
        <p>{cartItemsTotal} AOA</p>
      </div>
      <div>
        <span className="regular-m">Entrega</span>
        <p>{DELIVERY_PRICE} AOA</p>
      </div>
      <div>
        <span className="bold-l">Total</span>
        <p className="bold-l">{cartTotal} AOA</p>
      </div>

      <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} />
    </ConfirmationSectionContainer>
  )
}
