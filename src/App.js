import LandingPage from "./Components/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import DataContextProvider from "./Components/context/DataContextProvider";


function App() {
  return <div >
    <DataContextProvider>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      </Routes>
</DataContextProvider>
  </div>;
}

export default App;