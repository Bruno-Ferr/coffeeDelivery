import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { Purchase } from "./pages/Purchase";
import { Success } from "./pages/Success";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <DefaultLayout /> } >
        <Route path="/" element={ <Home/> } />
        <Route path="/checkout" element={ <Purchase/> } />
        <Route path="/success" element={ <Success/> } />
      </Route>
    </Routes>
  )
}