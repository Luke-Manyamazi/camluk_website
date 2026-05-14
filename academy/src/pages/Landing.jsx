import { Link } from 'react-router-dom';
import { BookOpen, Award, BarChart2, ArrowRight } from 'lucide-react';
import AcademyLogo from '@/components/AcademyLogo';
import { COURSES as courses } from '@/data/courses';

const features = [
  { icon: <BookOpen size={20} />, title: 'Structured Learning', desc: 'Courses organized into modules and lessons for a clear progression path.' },
  { icon: <BarChart2 size={20} />, title: 'Track Your Progress', desc: 'See exactly how far you\'ve come with per-lesson and per-course tracking.' },
  { icon: <Award size={20} />, title: 'Earn Certificates', desc: 'Complete a course and download a certificate to showcase your skills.' },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-4 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <AcademyLogo iconSize={32} />
        <div className="flex items-center gap-2">
          <Link to="/login" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sign in
          </Link>
          <Link to="/register" className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Get started
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-24 text-center">
          <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
            Camluk Technologies
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Learn. Practice. <span className="text-primary">Grow.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Practical tech courses designed for real-world skills. From computer basics to web development — start free, learn at your own pace.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Start learning free <ArrowRight size={18} />
          </Link>
        </section>

        {/* Features */}
        <section className="max-w-4xl mx-auto px-4 pb-20 grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                {f.icon}
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Course preview */}
        <section className="max-w-4xl mx-auto px-4 pb-24">
          <h2 className="text-2xl font-bold text-center mb-2">Our Courses</h2>
          <p className="text-muted-foreground text-center mb-10 text-sm">Sign up to start any of these courses for free</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {courses.map((c) => (
              <div key={c.id} className="glass-card rounded-xl p-5 flex gap-4 items-start">
                <div className="text-3xl">{c.icon}</div>
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
                  <div className="flex gap-3 mt-3 text-xs text-muted-foreground">
                    <span>{c.duration}</span>
                    <span>·</span>
                    <span>{c.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-colors"
            >
              Enroll in a course <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Camluk Technologies · All rights reserved
      </footer>
    </div>
  );
}
