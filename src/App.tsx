import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jokes from "./pages/Jokes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Jokes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
