import { useState, useEffect } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(() => {
    return JSON.parse(localStorage.getItem('cheak')) || [];
  });
  const [preparing, setPreparing] = useState(() => {
    return JSON.parse(localStorage.getItem('preparing')) || [];
  });

  // Load cart data from fakeData.json
  useEffect(() => {
    fetch('fakeData.json')
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  // Add item to the cart and store it in localStorage
  const handleAdd = (p) => {
    const exists = price.find((item) => item.recipe_id === p.recipe_id);

    if (!exists) {
      const updatedPrice = [...price, p];
      setPrice(updatedPrice);
      localStorage.setItem('cheak', JSON.stringify(updatedPrice));
    } else {
      toast.success('Already exists.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    }
  };

  // Move item from price list to preparing list and update localStorage
  const handlePreparing = (id) => {
    const updatedPrice = price.filter((item) => item.recipe_id !== id);
    const preparingItem = price.find((item) => item.recipe_id === id);

    if (preparingItem) {
      const updatedPreparing = [...preparing, preparingItem];
      setPrice(updatedPrice);
      setPreparing(updatedPreparing);

      localStorage.setItem('cheak', JSON.stringify(updatedPrice));
      localStorage.setItem('preparing', JSON.stringify(updatedPreparing));
    }
  };

  return (
    <>
      <div className="max-w-[1320px] mx-auto mt-12">
        <Header />
        <div className="mt-12">
          <Hero />
        </div>
        <div className="mt-12">
          <Main />
        </div>
        {/* Blogs and Sidebar */}
        <div className="mt-12 flex flex-col md:flex-row">
          <Blogs cart={cart} handleAdd={handleAdd} />
          <SideBar price={price} handlePreparing={handlePreparing} preparing={preparing} />
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
