import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './screens/Login';
import Chat from './screens/Chat';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/chat' element={<Chat/>}/>
    </Routes>
    </>
  );
}

export default App;
