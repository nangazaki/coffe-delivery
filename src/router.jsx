import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/success" element={ <Success /> } />
      </Routes>
    </>
  )
}
