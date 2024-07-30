import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import ProductListing from "./components/Products/ProductsListing";
import ProductDetails from "./components/Products/ProductDetails";
import Getstarted from './pages/Getstarted';
import Chatbot from './components/ChatBot/ChatBot';

function App() {
  const location = useLocation();
  const showNavAndFooter = location.pathname !== '/';

  return (
    <div className="background">
      {showNavAndFooter && <NavBar />}
      <Routes>
        <Route index element={<Getstarted />} />
        <Route path="/home" element={<ProductListing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      {showNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
