import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import DefaultLayout from "./layout/DefaultLayout";
import CompleteOrderPage from "./pages/CompleteOrder"

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/complete-order" element={<CompleteOrderPage />} />
        </Route>
      </Routes>
    </>
  )
}
