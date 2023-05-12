import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";
import { useCart } from '../../../../hooks/useCart'

export function SelectedCoffes() {
  const { cartItems } = useCart()

  return <SelectedCoffeesContainer>
    <h2>Cafés selecionados</h2>

    <DetailsContainer>
      {cartItems.map((item) => (
        <CoffeeCartCard key={item.id} coffee={item} />
      ))}

      <ConfirmationSection />
    </DetailsContainer>

  </SelectedCoffeesContainer>
}