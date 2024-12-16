import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AboutUs from "./components/AboutUs";
import Feed from "./components/Feed";
import { Provider } from "react-redux";
import appStore from "./components/store/appStore";
import Requests from "./components/Requests";
import Connections from "./components/Connections";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/connections" element={<Connections />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
