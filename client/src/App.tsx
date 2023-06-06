import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesAvailable from "./RoutesAvailable";
import "./App.css";
import UserProvider from "./contexts/UserContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    logger: {
      log: () => {},
      warn: () => {},
      error: () => {},
    },
  });

  return (
    <div className="ibm-font">
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <BrowserRouter>
            <RoutesAvailable />
          </BrowserRouter>
        </UserProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
