import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Beers from './pages/Beers';
import Contact from './pages/Contact';
import AgeVerificationModal from './components/AgeVerificationModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  if (!isAgeVerified) {
    return <AgeVerificationModal setIsAgeVerified={setIsAgeVerified} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'beers':
        return <Beers />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-grow p-4">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
