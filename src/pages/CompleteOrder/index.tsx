import React from 'react'
import { CompleteForm } from './components/CompleteForm'
import { SelectedCoffes } from './components/SelectedCoffes'
import { CompleteOrderContainer } from './style'
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string(),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type confirmOrderFormData = OrderData

export default function CompleteOrderPage() {
  const confirmOrderForm = useForm<confirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: confirmOrderFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer className='container' 
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteForm />
        <SelectedCoffes />
      </CompleteOrderContainer>
    </FormProvider>
  )
}


