import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import OurPosts from "./pages/OurPosts";
import Contact from './pages/Contact'

function App() {
  return <>
  

  <Header></Header>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/about/ourPosts" element={<OurPosts/>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>

  </Routes>
  

  </>;
}

export default App;
