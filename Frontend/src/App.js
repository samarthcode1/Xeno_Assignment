import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CampaignsPage from './components/CampaignsPage';
import AudiencePage from './components/AudiencePage';
import MessagePage from './components/MessagePage';
import LoginPage from './components/LoginPage'; 

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/audience" element={<AudiencePage />} />
        <Route path="/send-message" element={<MessagePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
