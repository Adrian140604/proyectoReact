import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./Layout";
import CommandBridge from "./CommandBridge";
import Engage from "./Engage";
import Missions from "./Missions";
import ShipProvider from "../context/ShipContext";
import Error from "./Error";

const Router = () => {
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
              <Route path="*" element={<Error/>}></Route>
            </Route>
          </Routes>
        </ShipProvider>
      </BrowserRouter>
    </>
  )
}


export default Router;