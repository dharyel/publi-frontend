import { AddressList } from "./pages/AddressList";
import { EditAddress } from "./pages/EditAddress";
import { AddAddress } from "./pages/AddAddress";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AddressList />} />
        <Route path="/edit" element={<EditAddress />} />
        <Route path="/new" element={<AddAddress />} />
      </Routes>
      
    </HashRouter>
  );
}

export default App;
