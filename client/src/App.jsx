import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader'; // Import Loader component
import VerifiedCertificate from './pages/VerifiedCertificate';
import VerifyCertificate from './pages/VerifyCertificate';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set loading to true whenever location (route) changes
    setLoading(true);

    // Set loading to false after a small delay (simulating loading time)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time according to your actual loading time

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-josefin">
      {/* Show loader while loading is true */}
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Header and Footer are only displayed after loading is false */}
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/team" element={<Team />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/certificates" element={<VerifyCertificate />} />
              <Route path="/verified-certificates/:certificateId" element={<VerifiedCertificate />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
