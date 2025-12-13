import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Layout from "./components/layout";
import CommandBridge from "./components/commandBridge";
import Engage from "./components/engage";
import Missions from "./components/missions";
import ShipProvider from "./context/ShipContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ShipProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/commandBridge" replace/>} />
              <Route path="commandBridge" element={<CommandBridge />}></Route>
              <Route path="engage" element={<Engage />}></Route>
              <Route path="missions" element={<Missions />}></Route>
              <Route path="*" element={ <h1> Error 404</h1>}></Route>
            </Route>
          </Routes>
        </ShipProvider>
      </BrowserRouter>
    </>
  )
}


export default App;
