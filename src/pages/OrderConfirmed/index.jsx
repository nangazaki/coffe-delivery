import { useTheme } from "styled-components"
import { Text } from "../Home/components/Hero/style";
import Illustration from "../../assets/Illustration.svg"
import { OrderConfirmedContainer, OrderConfirmedDetails, RegularText } from "./style";
import ItemWithIcon from "../Home/components/Benefits/ItemWithIcon"
import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'

export default function OrderConfirmedPage() {
  const { colors } = useTheme()

  return (
    <OrderConfirmedContainer className='container'>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <Text>Agora é só aguardar que logo o café chegará até você</Text>

      </div>
      <section>
        <OrderConfirmedDetails>
          <ItemWithIcon icon={<MapPin weight="fill" />}
            iconBg={colors['purple']}
            text={<RegularText>
              Entrega em <b>Rua João Daniel Martinelli, 102</b>
              <br />
              Farrapos - Porto Alegre, RS
            </RegularText>}
          />
          <ItemWithIcon icon={<Timer weight="fill" />}
            iconBg={colors['yellow']}
            text={<RegularText>
              Previsão de entrega
              <br />
              <b>20 min - 30 min</b>
            </RegularText>}
          />
          <ItemWithIcon icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['yellow-dark']}
            text={<RegularText>
              Pagamento na entrega
              <br />
              <b>Cartão de Crédito</b>
            </RegularText>}
          />
        </OrderConfirmedDetails>

        <img src={Illustration} />
      </section>
    </OrderConfirmedContainer>
  )
}
