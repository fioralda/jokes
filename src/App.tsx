import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateJoke from "./pages/CreateJoke";
import EditJoke from "./pages/EditJoke";
import Jokes from "./pages/Jokes";
import Login from "./pages/Login";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
