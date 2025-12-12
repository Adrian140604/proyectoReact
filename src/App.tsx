import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Layout from "./components/layout";
import PuenteDeMando from "./components/puenteDeMando";
import Contratar from "./components/contratar";
import Misiones from "./components/misiones";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/puenteDeMando" replace/>} />
            <Route path="puenteDeMando" element={<PuenteDeMando />}></Route>
            <Route path="contratar" element={<Contratar />}></Route>
            <Route path="misiones" element={<Misiones />}></Route>
            <Route path="*" element={ <h1> Error 404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
