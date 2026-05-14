import { useParams, Link } from 'react-router-dom';
import { getCourse } from '@/data/courses';
import { useProgress } from '@/hooks/useProgress';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, Printer } from 'lucide-react';

export default function Certificate() {
  const { courseId } = useParams();
  const course = getCourse(courseId);
  const { user } = useAuth();
  const { progress, loadingProgress } = useProgress(courseId);

  if (loadingProgress) return null;

  if (!progress?.completed) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 text-center px-4">
        <div className="text-4xl">🔒</div>
        <h2 className="text-xl font-bold">Certificate not yet earned</h2>
        <p className="text-muted-foreground text-sm max-w-sm">
          Complete all lessons in <strong>{course?.title}</strong> to unlock your certificate.
        </p>
        <Link to={`/courses/${courseId}`} className="text-primary hover:underline text-sm">
          Return to course →
        </Link>
      </div>
    );
  }

  const completedDate = progress.completedAt?.toDate?.()
    ? new Intl.DateTimeFormat('en-ZA', { dateStyle: 'long' }).format(progress.completedAt.toDate())
    : new Intl.DateTimeFormat('en-ZA', { dateStyle: 'long' }).format(new Date());

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Controls — hidden on print */}
      <div className="no-print max-w-4xl mx-auto px-4 pt-8 pb-4 flex items-center gap-4">
        <Link to={`/courses/${courseId}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
          <ArrowLeft size={16} /> Back to course
        </Link>
        <button
          onClick={() => window.print()}
          className="ml-auto flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <Printer size={16} /> Print / Save PDF
        </button>
      </div>

      {/* Certificate */}
      <div className="max-w-3xl mx-auto px-4 pb-16 print:p-0 print:max-w-none">
        <div
          className="relative bg-white text-gray-900 rounded-2xl overflow-hidden shadow-2xl print:shadow-none print:rounded-none"
          style={{ aspectRatio: '1.414 / 1' }}
        >
          {/* Top border accent */}
          <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400" />
          <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400" />

          {/* Inner border */}
          <div className="absolute inset-4 border-2 border-orange-200 rounded-xl pointer-events-none" />

          <div className="relative h-full flex flex-col items-center justify-center px-12 py-10 text-center">
            {/* Logo / brand */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🎓</span>
              <span className="text-xl font-bold text-gray-800 tracking-wide">Camluk <span className="text-orange-500">Academy</span></span>
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-4">Certificate of Completion</p>

            <p className="text-sm text-gray-500 mb-2">This certifies that</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {user?.displayName || user?.email}
            </h1>
            <p className="text-sm text-gray-500 mb-6">has successfully completed</p>
            <h2 className="text-2xl font-bold text-orange-500 mb-1">{course?.title}</h2>
            <p className="text-sm text-gray-400 mb-8">{course?.description}</p>

            <div className="flex items-center gap-8 text-sm text-gray-500">
              <div className="text-center">
                <div className="font-semibold text-gray-700">{completedDate}</div>
                <div className="text-xs mt-0.5">Date of completion</div>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div className="text-center">
                <div className="font-semibold text-gray-700">Camluk Technologies</div>
                <div className="text-xs mt-0.5">Issuing organisation</div>
              </div>
            </div>

            {/* Decorative seal */}
            <div className="absolute bottom-10 right-12 w-16 h-16 rounded-full border-4 border-orange-400 flex items-center justify-center opacity-20">
              <span className="text-2xl">🏅</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
