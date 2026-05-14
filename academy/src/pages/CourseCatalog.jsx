import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import { COURSES as courses } from '@/data/courses';

export default function CourseCatalog() {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    if (!user) return;
    getDocs(collection(db, 'users', user.uid, 'enrollments')).then((snap) => {
      const map = {};
      snap.forEach((d) => { map[d.id] = d.data(); });
      setEnrollments(map);
      setLoading(false);
    });
  }, [user]);

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const filtered = filter === 'All' ? courses : courses.filter((c) => c.level === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Course Catalog</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {courses.length} courses available · learn at your own pace
          </p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => setFilter(l)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === l
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-muted-foreground">Loading...</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((c) => (
              <CourseCard key={c.id} course={c} enrollment={enrollments[c.id] ?? null} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
