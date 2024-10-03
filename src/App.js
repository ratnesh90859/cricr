import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
  
  import Blog from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Footer from "./components/Footer";
import Tournaments from "./components/tournaments";
import TeamFormPage1 from "./components/TeamFormPage1";
import TeamFormPage2 from "./components/TeamFormPage2";
import Success from "./components/Success";

import ClientPanel1 from "./components/Pages/ClientPanel1";
import ClientPanel2 from "./components/Pages/clientPanel2";
import ClientPanel3 from "./components/Pages/clientPanel3";
import ClientPanel4 from "./components/Pages/clientPanel4";
import ClientPanel5 from "./components/Pages/clientPanel5";
import ClientPanel from "./components/Pages/clientPanel";



function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Tournaments />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<TeamFormPage1 />} />
            <Route path="/register/page2" element={<TeamFormPage2 />} />
            <Route path="/success" element={<Success />} />
            <Route path="/client" element={<ClientPanel/>} />
            <Route path="/client1" element={<ClientPanel1 />} />
            <Route path="/client2" element={<ClientPanel2 />} />
            <Route path="/clients" element={<ClientPanel3 />} />
            <Route path="/client4" element={<ClientPanel4 />} />
            <Route path="/client5" element={<ClientPanel5 />} />

          </Routes>
        </div>
        <Footer/>
      </Router>
  </>
  );
}

export default App;
