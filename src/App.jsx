import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import backgroundImage from "./assets/images/bg.png";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <div
        className="main h-screen w-screen bg-cover bg-center bg-fixed overflow-hidden flex"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Sidebar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
