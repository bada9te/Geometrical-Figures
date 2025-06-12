import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./pages";
import Cone from "./pages/cone";
import Cube from "./pages/cube";
import Cuboid from "./pages/cuboid";
import Sphere from "./pages/sphere";
import OutletWrapper from "./pages/outlet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/figures" element={<OutletWrapper/>}>
          <Route path="cone"   element={<Cone/>}   />
          <Route path="cube"   element={<Cube/>}   />
          <Route path="cuboid" element={<Cuboid/>} />
          <Route path="sphere" element={<Sphere/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
