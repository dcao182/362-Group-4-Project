import AuthContextProvider from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  // Initialize the FirebaseUI Widget using Firebase.
  const { currentUser } = useAuth();

  return (
    <div>
      <AuthContextProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/listing" element={<Listing />} />
                <Route path="/profile" element={<SignIn />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer></Footer>
          </div>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
