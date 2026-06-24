import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('core_tech_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [getStartedStep, setGetStartedStep] = useState(1);

  useEffect(() => {
    if (user) {
      localStorage.setItem('core_tech_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('core_tech_user');
    }
  }, [user]);

  const login = (email, password) => {
    // Simulated successful login
    const mockUser = {
      name: email.split('@')[0].toUpperCase(),
      email: email,
      shippingAddress: null,
      savedConfigs: JSON.parse(localStorage.getItem(`configs_${email}`)) || [],
      orders: JSON.parse(localStorage.getItem(`orders_${email}`)) || [
        {
          id: 'ORD-8942-X',
          date: '2026-06-15',
          status: 'Delivered',
          total: 1250,
          items: [
            { name: 'KINETIX MKL Keyboard', price: 250, quantity: 1 },
            { name: 'Core Monitor 4K', price: 1000, quantity: 1 }
          ]
        }
      ]
    };
    setUser(mockUser);
    return { success: true };
  };

  const signup = (name, email, password) => {
    // Simulated successful signup
    const mockUser = {
      name: name,
      email: email,
      shippingAddress: null,
      savedConfigs: [],
      orders: []
    };
    setUser(mockUser);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const updateAddress = (address) => {
    if (user) {
      const updatedUser = { ...user, shippingAddress: address };
      setUser(updatedUser);
      return { success: true };
    }
    return { success: false, error: 'User not logged in' };
  };

  const saveConfig = (config) => {
    if (!user) {
      setIsAuthOpen(true);
      return { success: false, error: 'Please log in to save configurations' };
    }

    const updatedConfigs = [...user.savedConfigs, { ...config, id: `cfg-${Date.now()}`, savedAt: new Date().toLocaleDateString() }];
    const updatedUser = { ...user, savedConfigs: updatedConfigs };
    setUser(updatedUser);
    localStorage.setItem(`configs_${user.email}`, JSON.stringify(updatedConfigs));
    return { success: true };
  };

  const addOrder = (orderItems, total, shippingAddress) => {
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Processing',
      total: total,
      items: orderItems.map(item => ({ name: item.name, price: item.price, quantity: item.quantity, specs: item.specs || null })),
      shippingAddress
    };

    if (user) {
      const updatedOrders = [newOrder, ...user.orders];
      const updatedUser = { ...user, orders: updatedOrders };
      setUser(updatedUser);
      localStorage.setItem(`orders_${user.email}`, JSON.stringify(updatedOrders));
    } else {
      // Guest order save to local storage
      const guestOrders = JSON.parse(localStorage.getItem('core_tech_guest_orders')) || [];
      localStorage.setItem('core_tech_guest_orders', JSON.stringify([newOrder, ...guestOrders]));
    }
    return newOrder;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthOpen,
        setIsAuthOpen,
        isGetStartedOpen,
        setIsGetStartedOpen,
        getStartedStep,
        setGetStartedStep,
        login,
        signup,
        logout,
        updateAddress,
        saveConfig,
        addOrder
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
