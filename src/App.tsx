import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CreateJoke from "./pages/CreateJoke";
import EditJoke from "./pages/EditJoke";
import Jokes from "./pages/Jokes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Jokes />} />
        <Route path="/new" element={<CreateJoke />} />
        <Route path="/joke/:id" element={<EditJoke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
