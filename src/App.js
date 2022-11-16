import { useConst } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContext, AuthContextProvider } from "./Context/AuthContext";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  const { currentUser } = useConst(AuthContext);
  // const protectedRoute = ({ children }) => {
  //   return currentUser === null ? <Login /> : children;
  // };
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="signup" element={<SignUp></SignUp>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
