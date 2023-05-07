import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";

export function SelectedCoffes() {
  return <SelectedCoffeesContainer>
    <h2>Cafés selecionados</h2>

    <DetailsContainer>
      <CoffeeCartCard />
      <CoffeeCartCard />
      <CoffeeCartCard />

      <ConfirmationSection />
    </DetailsContainer>

  </SelectedCoffeesContainer>
}