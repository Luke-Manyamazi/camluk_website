import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import { COURSES as courses } from '@/data/courses';
import { Link } from 'react-router-dom';
import { BookOpen, Award, TrendingUp, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    getDocs(collection(db, 'users', user.uid, 'enrollments')).then((snap) => {
      const map = {};
      snap.forEach((d) => { map[d.id] = d.data(); });
      setEnrollments(map);
      setLoading(false);
    });
  }, [user]);

  const enrolled = courses.filter((c) => enrollments[c.id]);
  const completed = enrolled.filter((c) => enrollments[c.id]?.completed);
  const inProgress = enrolled.filter((c) => !enrollments[c.id]?.completed);
  const unenrolled = courses.filter((c) => !enrollments[c.id]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            Welcome back, <span className="text-primary">{user?.displayName?.split(' ')[0] || 'Student'}</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Continue where you left off</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { icon: <BookOpen size={18} />, label: 'Enrolled', value: enrolled.length },
            { icon: <TrendingUp size={18} />, label: 'In Progress', value: inProgress.length },
            { icon: <Award size={18} />, label: 'Completed', value: completed.length },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                {s.icon}
              </div>
              <div>
                <div className="text-xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* In Progress */}
        {!loading && inProgress.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-4">Continue Learning</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {inProgress.map((c) => (
                <CourseCard key={c.id} course={c} enrollment={enrollments[c.id]} />
              ))}
            </div>
          </section>
        )}

        {/* Completed */}
        {!loading && completed.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-4">Completed Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {completed.map((c) => (
                <CourseCard key={c.id} course={c} enrollment={enrollments[c.id]} />
              ))}
            </div>
          </section>
        )}

        {/* Explore */}
        {!loading && unenrolled.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Explore Courses</h2>
              <Link to="/courses" className="text-sm text-primary hover:underline flex items-center gap-1">
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {unenrolled.slice(0, 3).map((c) => (
                <CourseCard key={c.id} course={c} enrollment={null} />
              ))}
            </div>
          </section>
        )}

        {!loading && enrolled.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="font-semibold text-lg mb-2">No courses yet</h3>
            <p className="text-muted-foreground text-sm mb-6">Browse our catalog and enroll in your first course</p>
            <Link to="/courses" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Browse courses
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
