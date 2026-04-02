import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-6 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200/20 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-100/30 rounded-full animate-pulse-slow"></div>

      <div className="relative z-10 max-w-md w-full text-center space-y-8">
        {/* Sliding 404 */}
        <div className="overflow-hidden whitespace-nowrap">
          <h1 className="text-[8rem] text-black font-extrabold inline-block animate-slide">
            404
          </h1>
        </div>

        <h2 className="text-3xl font-semibold text-slate-800">
          Uh-oh! Something’s on a break!
        </h2>
        <p className="text-slate-600 leading-relaxed">
          The page <span className="font-medium text-slate-700">"{pageName}"</span> 
          seems to have taken a coffee break ☕ or wandered off. Don’t worry — you can head back home!
        </p>

        <button
          onClick={() => (window.location.href = '/')}
          className="mt-4 inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
        >
          Go Home
          <ArrowRight className="w-5 h-5 ml-2 animate-bounce" />
        </button>
      </div>

      {/* Tailwind animation for sliding 404 */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-slide {
            animation: slide 5s linear infinite;
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}