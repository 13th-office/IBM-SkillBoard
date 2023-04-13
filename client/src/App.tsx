import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesAvailable from "./RoutesAvailable";
import "./App.css";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="ibm-font">
      <UserProvider>
        <BrowserRouter>
          <RoutesAvailable />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
