import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CreateJoke from "./pages/CreateJoke";
import Jokes from "./pages/Jokes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Jokes />} />
        <Route path="/new" element={<CreateJoke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
