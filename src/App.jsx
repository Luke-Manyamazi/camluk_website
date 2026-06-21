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
import Portfolio from './pages/PortfolioPage';
import Courses from './pages/ExploreCourses';
import AISolutions from './pages/AISolutionsPage';
import Academy from './pages/AcademyPage';
import AcademyEnrol from './pages/AcademyEnrolPage';
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
          <Route path="/"                element={<Home />} />
          <Route path="/portfolio"       element={<Portfolio />} />
          <Route path="/courses"         element={<Courses />} />
          <Route path="/ai-solutions"    element={<AISolutions />} />
          <Route path="/academy"         element={<Academy />} />
          <Route path="/academy/enrol"   element={<AcademyEnrol />} />
          <Route path="*"                element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
      <WhatsAppFloat />
      <Chatbot />
    </QueryClientProvider>
  );
}

export default App;
