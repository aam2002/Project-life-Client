import LandingPage from "./Components/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import DataContextProvider from "./Components/context/DataContextProvider";
import Contentpage from "./Components/Contentpage/Contentpage";

function App() {
  return (
    <div>
      <DataContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contentpage" element={<Contentpage />} />
        </Routes>
      </DataContextProvider>
    </div>
  );
}

export default App;
