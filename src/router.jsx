import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import DefaultLayout from "./layout/DefaultLayout";
import CompleteOrderPage from "./pages/CompleteOrder"
import OrderConfirmedPage from "./pages/OrderConfirmed";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/complete-order" element={<CompleteOrderPage />} />
          <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
        </Route>
      </Routes>
    </>
  )
}
