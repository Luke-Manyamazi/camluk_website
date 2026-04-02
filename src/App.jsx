import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import FloatingWhatsapp from '@/components/ui/FloatingWhatsApp';

import Home from './pages/Home';
import Portfolio from './pages/PortfolioPage';
import Courses from './pages/ExploreCourses';
import PageNotFound from './lib/PageNotFound';

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
      <FloatingWhatsapp />
    </QueryClientProvider>
  );
}

export default App;