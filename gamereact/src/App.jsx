import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";

import Home from "./Pages/Home";
import { PrivateSale } from "./Pages/PrivateSale";
import Team from "./Pages/Team";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route  index element={<Home></Home>}></Route>
        <Route path="team" element={<Team></Team>}></Route>
        <Route path="private-sale" element={<PrivateSale></PrivateSale>}></Route>

      </Route>
      
    </Routes>
  );
}

export default App;
