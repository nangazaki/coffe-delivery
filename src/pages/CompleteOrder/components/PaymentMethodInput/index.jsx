import { CreditCard } from "phosphor-react";
import { PaymentMethodContainer } from "./style";

export default function PaymentMethodInput() {
  return (
    <PaymentMethodContainer>
      <CreditCard size={16} />
      Cartao de Crédito
    </PaymentMethodContainer>
  )
}
