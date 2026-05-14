import { useSearchParams, Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

export default function PaymentCancel() {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('courseId');

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="glass-card rounded-2xl p-10 max-w-md w-full text-center flex flex-col items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
          <XCircle size={40} className="text-destructive" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Payment cancelled</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            No charge was made. You can try again whenever you're ready.
          </p>
        </div>
        {courseId && (
          <Link
            to={`/courses/${courseId}`}
            className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Back to course
          </Link>
        )}
        <Link to="/courses" className="text-sm text-muted-foreground hover:text-foreground">
          Browse all courses
        </Link>
      </div>
    </div>
  );
}
