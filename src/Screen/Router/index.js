import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Login from "../../Screen/Login";
  import Dashboard from "../Dashboard";
  function Router()
  {
      return<BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
  }
  export default Router