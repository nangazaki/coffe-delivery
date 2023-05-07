import { CompleteForm } from './components/CompleteForm'
import { SelectedCoffes } from './components/SelectedCoffes'
import { CompleteOrderContainer } from './style'

export default function CompleteOrderPage() {
  return (
    <CompleteOrderContainer className='container'>
      <CompleteForm />
      <SelectedCoffes />
    </CompleteOrderContainer>
  )
}


