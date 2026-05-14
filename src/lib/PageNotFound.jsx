import { useLocation, Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function PageNotFound() {
  const { pathname } = useLocation();
  const pageName = pathname.replace('/', '') || 'this page';

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-md">
        <div className="text-[9rem] sm:text-[12rem] font-black leading-none text-primary/10 select-none tracking-tighter">
          404
        </div>

        <div className="-mt-6">
          <h1 className="text-3xl font-bold">Page not found</h1>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Looks like <span className="text-primary font-medium">"{pageName}"</span> took a coffee break ☕ and wandered off. Let's get you back on track.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            <Home size={16} /> Go home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium hover:bg-secondary transition-colors"
          >
            <ArrowLeft size={16} /> Go back
          </button>
        </div>
      </div>
    </div>
  );
}
