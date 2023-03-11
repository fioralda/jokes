import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import { useCustomThemeContext } from "./context/CustomThemeProvider/CustomThemeProvider";
import CreateJoke from "./pages/CreateJoke";
import EditJoke from "./pages/EditJoke";
import Jokes from "./pages/Jokes";
import Login from "./pages/Login";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/global";

function App() {
  const { theme } = useCustomThemeContext();
  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route
            index
            element={
              <ProtectedRoute>
                <Jokes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/new"
            element={
              <ProtectedRoute>
                <CreateJoke />
              </ProtectedRoute>
            }
          />
          <Route
            path="/joke/:id"
            element={
              <ProtectedRoute>
                <EditJoke />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
