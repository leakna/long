import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Servicepage from "./pages/service-page";
import "./index.css";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar/Navbar";
import UnstickyNavbar from "./components/navbar/UnstickyNavbar";
import Aboutus from "./components/aboutus/content";
import Faq from "./components/faq/content";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Faq />
      
    </div>
  );
}

export default App;
