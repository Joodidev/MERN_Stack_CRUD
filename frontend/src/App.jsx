import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container pt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
