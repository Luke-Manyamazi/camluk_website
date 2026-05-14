import { Link, useLocation } from 'react-router-dom';
import { Home, ArrowLeft, GraduationCap } from 'lucide-react';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 text-center">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-sm">
        {/* Logo mark */}
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          <GraduationCap size={32} className="text-primary" />
        </div>

        {/* 404 */}
        <div className="text-[7rem] font-black leading-none text-primary/15 select-none">
          404
        </div>

        <div>
          <h1 className="text-2xl font-bold">Page not found</h1>
          <p className="text-muted-foreground text-sm mt-2">
            <span className="font-mono text-primary/70">{pathname}</span> doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm"
          >
            <Home size={15} /> Go home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border border-border px-5 py-2.5 rounded-xl text-sm hover:bg-secondary transition-colors"
          >
            <ArrowLeft size={15} /> Go back
          </button>
        </div>
      </div>
    </div>
  );
}
