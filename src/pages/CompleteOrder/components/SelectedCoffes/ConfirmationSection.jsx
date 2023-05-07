import { Button } from "../../../../components/Button";
import { ConfirmationSectionContainer } from "./style";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <span className="regular-m">Total de itens</span>
        <p>3600 AOA</p>
      </div>
      <div>
        <span className="regular-m">Entrega</span>
        <p>700 AOA</p>
      </div>
      <div>
        <span className="bold-l">Total</span>
        <p className="bold-l">4300 AOA</p>
      </div>

      <Button text="Confirmar Pedido" />
    </ConfirmationSectionContainer>
  )
}
