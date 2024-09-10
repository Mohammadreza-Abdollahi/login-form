import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Navigate to={'/register'}/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    </>
   );
}
 
export default App;