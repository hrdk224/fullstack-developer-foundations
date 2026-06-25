import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Workstations from './pages/Workstations';
import Laptops from './pages/Laptops';
import Ecosystem from './pages/Ecosystem';
import ShopAll from './pages/ShopAll';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import OrderSuccess from './pages/OrderSuccess';
import AuthModal from './components/ui/AuthModal';
import GetStartedModal from './components/ui/GetStartedModal';

const AppContent = () => {
  const { isGetStartedOpen, setIsGetStartedOpen, getStartedStep, setGetStartedStep } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background">
      <Navbar onOpenGetStarted={() => {
        setGetStartedStep(1);
        setIsGetStartedOpen(true);
      }} />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workstations" element={<Workstations />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/order-success/:orderId" element={<OrderSuccess />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Overlays */}
      <AuthModal />
      <GetStartedModal 
        isOpen={isGetStartedOpen} 
        onClose={() => setIsGetStartedOpen(false)} 
        initialStep={getStartedStep}
      />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
