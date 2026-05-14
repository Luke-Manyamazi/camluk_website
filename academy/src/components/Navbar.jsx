import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { GraduationCap, LogOut, LayoutDashboard, BookOpen } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate('/');
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center gap-2 font-bold text-lg">
          <GraduationCap className="text-primary" size={24} />
          <span>Camluk <span className="text-primary">Academy</span></span>
        </Link>

        {user && (
          <div className="flex items-center gap-1">
            <Link
              to="/dashboard"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>
            <Link
              to="/courses"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <BookOpen size={16} />
              Courses
            </Link>
            <div className="ml-2 pl-2 border-l border-border flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user.displayName || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
              >
                <LogOut size={16} />
                <span className="hidden sm:block">Sign out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
