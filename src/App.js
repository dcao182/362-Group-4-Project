import AuthContextProvider from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Listing from "./pages/Listing";

function App() {
  // Initialize the FirebaseUI Widget using Firebase.
  const { currentUser } = useAuth();
  

  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/listing" element={<Listing />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
