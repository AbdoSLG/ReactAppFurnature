import { Route, Routes } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";

import { Home } from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Team from "./pages/Team";
import Blog from "./pages/Blog";

import AppFooter from "./components/AppFooter";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <AppFooter />
      <Layout />
    </div>
  );
}

export default App;
