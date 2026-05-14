import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import Landing from '@/pages/Landing';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import CourseCatalog from '@/pages/CourseCatalog';
import CoursePage from '@/pages/CoursePage';
import QuizPage from '@/pages/QuizPage';
import Certificate from '@/pages/Certificate';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
        <Route path="/courses/:courseId/quiz/:moduleId" element={<QuizPage />} />
        <Route path="/courses/:courseId/certificate" element={<Certificate />} />
      </Route>
    </Routes>
  );
}
