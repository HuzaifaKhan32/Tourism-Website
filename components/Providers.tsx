'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import LoadingScreen from './LoadingScreen';
import { usePathname, useRouter } from 'next/navigation';

// --- Context Definitions ---

interface CartContextType {
  items: any[];
  addToCart: (item: any) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

interface WishlistContextType {
  items: any[];
  addToWishlist: (item: any) => void;
  removeFromWishlist: (id: string) => void;
}

interface UserContextType {
  user: any | null;
  login: (userData: any) => void;
  logout: () => void;
}

interface UIContextType {
  initialLoading: boolean;
  navTransition: boolean;
  triggerNavTransition: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);
const UserContext = createContext<UserContextType | undefined>(undefined);
const UIContext = createContext<UIContextType | undefined>(undefined);

// --- Provider Component ---

export function Providers({ children }: { children: React.ReactNode }) {
  // UI State (from App.tsx)
  const [initialLoading, setInitialLoading] = useState(true);
  const [navTransition, setNavTransition] = useState(false);
  
  // Cart/Wishlist/User State (LocalStorage persistence)
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [user, setUser] = useState<any | null>(null);

  // Initialize UI Loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize LocalStorage Data
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      const savedWishlist = localStorage.getItem('wishlist');
      const savedUser = localStorage.getItem('user');

      if (savedCart) setCartItems(JSON.parse(savedCart));
      if (savedWishlist) setWishlistItems(JSON.parse(savedWishlist));
      if (savedUser) setUser(JSON.parse(savedUser));
    }
  }, []);

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  // Actions
  const addToCart = (item: any) => setCartItems(prev => [...prev, item]);
  const removeFromCart = (id: string) => setCartItems(prev => prev.filter(i => i.id !== id));
  const clearCart = () => setCartItems([]);

  const addToWishlist = (item: any) => setWishlistItems(prev => [...prev, item]);
  const removeFromWishlist = (id: string) => setWishlistItems(prev => prev.filter(i => i.id !== id));

  const login = (userData: any) => setUser(userData);
  const logout = () => setUser(null);

  const triggerNavTransition = useCallback(() => {
    setNavTransition(true);
    setTimeout(() => {
      setNavTransition(false);
    }, 800);
  }, []);

  return (
    <UIContext.Provider value={{ initialLoading, navTransition, triggerNavTransition }}>
      <UserContext.Provider value={{ user, login, logout }}>
        <CartContext.Provider value={{ items: cartItems, addToCart, removeFromCart, clearCart }}>
          <WishlistContext.Provider value={{ items: wishlistItems, addToWishlist, removeFromWishlist }}>
            <LoadingScreen isLoading={initialLoading} />
            <LoadingScreen isLoading={navTransition} />
            {children}
          </WishlistContext.Provider>
        </CartContext.Provider>
      </UserContext.Provider>
    </UIContext.Provider>
  );
}

// --- Hooks ---

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within Providers');
  return context;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within Providers');
  return context;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within Providers');
  return context;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error('useUI must be used within Providers');
  return context;
};
