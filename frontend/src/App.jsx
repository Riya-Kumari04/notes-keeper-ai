import Notes from "./pages/Notes";

import Home from "./pages/Home";
import Navbar from "./components/navbar";


function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Notes App
      </h1>
      <Notes />
    </div>
  );
}

export default App;
