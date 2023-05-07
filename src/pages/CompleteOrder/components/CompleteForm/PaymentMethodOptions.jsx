import PaymentMethodInput from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./style";

export default function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  )
}
