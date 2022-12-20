import React from "react";
import AuthContextProvider from "./contexts/authContext";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <MainRoutes />
    </AuthContextProvider>
  );
};

export default App;
