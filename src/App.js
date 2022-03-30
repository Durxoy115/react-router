import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
//import Friend from "./components/Friend/Friend";
import Friends from "./components/Friends/Friends";
import FriendDetails from "./components/FriendsDetails/FriendDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/friend/:friendId"
          element={<FriendDetails></FriendDetails>}
        ></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
