import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeServiceSearch from './components/Landing';
import ServiceCategoryPage from './components/CategoryPage';
import Header from './components/Navbar';
import PartnerProgram from './components/PartnerProgram';

function App() {
  const [newPartner, setNewPartner] = useState(null);

  const handleNewPartner = (partner) => {
    setNewPartner(partner);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeServiceSearch />} />
        <Route 
          path="/category/:category" 
          element={<ServiceCategoryPage newPartner={newPartner} />} 
        />
        <Route 
          path="/register-cleaner" 
          element={<PartnerProgram onNewPartner={handleNewPartner} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
