import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { useAuth } from '@/contexts/AuthContext';
import { getCourse } from '@/data/courses';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate        = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const courseId  = searchParams.get('courseId');
  const paymentId = searchParams.get('pid');
  const course    = getCourse(courseId);

  const [status, setStatus] = useState('processing'); // processing | success | error

  useEffect(() => {
    if (authLoading) return;
    if (!user) { navigate('/login'); return; }
    if (!courseId || !course) { setStatus('error'); return; }

    async function activate() {
      try {
        const ref = doc(db, 'users', user.uid, 'enrollments', courseId);
        const snap = await getDoc(ref);

        if (snap.exists() && snap.data().paid) {
          setStatus('success');
          return;
        }

        await setDoc(ref, {
          enrolledAt:       serverTimestamp(),
          completedLessons: [],
          quizScores:       {},
          completed:        false,
          completedAt:      null,
          paid:             true,
          paymentId:        paymentId ?? null,
        });

        setStatus('success');
      } catch {
        setStatus('error');
      }
    }

    activate();
  }, [user, authLoading, courseId, paymentId]);

  if (status === 'processing' || authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center flex-col gap-4 text-muted-foreground">
        <Loader2 size={32} className="animate-spin text-primary" />
        <p>Activating your course access…</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center flex-col gap-4 text-center px-4">
        <div className="text-4xl">⚠️</div>
        <h2 className="text-xl font-bold">Something went wrong</h2>
        <p className="text-muted-foreground text-sm max-w-sm">
          Your payment may have gone through but we couldn't activate your course. Please contact{' '}
          <a href="mailto:info@camluk.co.za" className="text-primary underline">info@camluk.co.za</a>{' '}
          with your payment reference.
        </p>
        <Link to="/courses" className="text-primary hover:underline text-sm">Back to courses</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="glass-card rounded-2xl p-10 max-w-md w-full text-center flex flex-col items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle2 size={40} className="text-green-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Payment successful!</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            You now have full access to <strong className="text-foreground">{course?.title}</strong>.
          </p>
        </div>
        <Link
          to={`/courses/${courseId}`}
          className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors"
        >
          Start Learning →
        </Link>
        <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}
