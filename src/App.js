import "./App.css";
import Header from "./components/Header";
import { Route ,Routes } from "react-router";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  return <>
  <Header />
  <Routes>
    <Route  path="/" element={<Cards />}/>
    <Route  path="/cart/:id" element={<CardDetails />}/>
    <Route path="/aboutUs" element={<AboutUs />} />
    <Route path="/contactUs" element={<Contact />}/>
  </Routes>
  </>;
}

export default App;
