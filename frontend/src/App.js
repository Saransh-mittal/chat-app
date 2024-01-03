import "./App.css";
import { Routes, Route } from "react-router-dom";
import Chat from "./screens/Chat";
import Homepage from "./screens/Homepage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
