import "./App.css";
import Pages from "./Pages/Pages";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (

    <div className="App">
    <BrowserRouter>
      <Pages />
      </BrowserRouter>
    </div>

  );
}

export default App;
