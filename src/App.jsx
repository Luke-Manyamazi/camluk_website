import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import PageNotFound from './lib/PageNotFound';
import WhatsAppFloat from './components/ui/FloatingWhatsApp';
import Chatbot from './components/ui/Chatbot';

const queryClientInstance = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
      <WhatsAppFloat />
      <Chatbot />
    </QueryClientProvider>
  );
}

export default App;
