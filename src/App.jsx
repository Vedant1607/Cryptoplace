import Navbar from "@/components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Coin from "@/pages/Coin/Coin";

const App = () => {
  return (
    <div class="min-h-screen text-white bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App;