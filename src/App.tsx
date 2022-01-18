import { AddressList } from "./pages/AddressList";
import { EditAddress } from "./pages/EditAddress";
import { AddAddress } from "./pages/AddAddress";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddressList />} />
        <Route path="/edit" element={<EditAddress />} />
        <Route path="/new" element={<AddAddress />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
