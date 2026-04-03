import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Portfolio from './pages/PortfolioPage';
import Courses from './pages/ExploreCourses';
import PageNotFound from './lib/PageNotFound';
import WhatsAppFloat from './components/ui/FloatingWhatsApp';
import Chatbot from './components/ui/Chatbot';

const queryClientInstance = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/courses" element={<Courses />} />
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