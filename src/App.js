import "./App.css";
import Header from "./components/Header";
import { Route ,Routes } from "react-router";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
import AboutUs from "./components/AboutUs";

function App() {
  return <>
  <Header />
  <Routes>
    <Route  path="/" element={<Cards />}/>
    <Route  path="/cart/:id" element={<CardDetails />}/>
  </Routes>
  </>;
}

export default App;
