import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getCourse, getTotalLessons, getProgressPercent } from '@/data/courses';
import { useProgress } from '@/hooks/useProgress';
import Navbar from '@/components/Navbar';
import ProgressBar from '@/components/ProgressBar';
import PaymentModal from '@/components/PaymentModal';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, PlayCircle, FileQuestion, Award, ArrowLeft, Lock } from 'lucide-react';

export default function CoursePage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = getCourse(courseId);
  const { progress, loadingProgress, completeLesson, markCourseComplete } = useProgress(courseId);

  const [activeLesson, setActiveLesson] = useState(null);
  const [openModules, setOpenModules] = useState({ 0: true });
  const [showPayment, setShowPayment] = useState(false);

  if (!course) return (
    <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">
      Course not found
    </div>
  );

  const isPaid  = progress?.paid === true;
  const isDone  = progress?.completed;
  const completed   = progress?.completedLessons ?? [];
  const totalLessons = getTotalLessons(course);
  const percent = isPaid ? getProgressPercent(course, completed) : 0;

  function toggleModule(idx) {
    setOpenModules((p) => ({ ...p, [idx]: !p[idx] }));
  }

  const currentLesson = activeLesson ?? course.modules[0]?.lessons[0] ?? null;

  async function handleCompleteLesson() {
    if (!currentLesson || !isPaid) return;
    await completeLesson(currentLesson.id);
    const allLessons = course.modules.flatMap((m) => m.lessons.map((l) => l.id));
    const newCompleted = completed.includes(currentLesson.id)
      ? completed
      : [...completed, currentLesson.id];
    if (newCompleted.length === allLessons.length && !isDone) {
      await markCourseComplete();
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-6xl w-full mx-auto px-4 pt-20 pb-10 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 py-4 border-b border-border mb-4">
          <button onClick={() => navigate(-1)} className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-lg truncate">{course.title}</h1>
            {isPaid ? (
              <div className="flex items-center gap-3 mt-1">
                <ProgressBar value={percent} className="w-32" />
                <span className="text-xs text-muted-foreground">{percent}% · {completed.length}/{totalLessons} lessons</span>
              </div>
            ) : (
              <p className="text-xs text-muted-foreground mt-1">{course.level} · {course.duration}</p>
            )}
          </div>
          {!isPaid && (
            <button
              onClick={() => setShowPayment(true)}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Lock size={14} /> Enroll — R{course.price}
            </button>
          )}
          {isDone && (
            <Link
              to={`/courses/${courseId}/certificate`}
              className="flex items-center gap-1.5 text-sm text-yellow-400 bg-yellow-400/10 px-3 py-1.5 rounded-lg font-medium"
            >
              <Award size={16} /> Certificate
            </Link>
          )}
        </div>

        <div className="flex gap-6 flex-1">
          {/* Sidebar */}
          <aside className="w-72 shrink-0 hidden lg:flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-14rem)]">
            {course.modules.map((mod, mIdx) => (
              <div key={mod.id} className="mb-1">
                <button
                  onClick={() => toggleModule(mIdx)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-secondary transition-colors text-left"
                >
                  <span className="truncate pr-2">{mod.title}</span>
                  {openModules[mIdx]
                    ? <ChevronDown size={16} className="shrink-0 text-muted-foreground" />
                    : <ChevronRight size={16} className="shrink-0 text-muted-foreground" />
                  }
                </button>
                {openModules[mIdx] && (
                  <div className="ml-2 flex flex-col gap-0.5 mb-1">
                    {mod.lessons.map((lesson) => {
                      const done   = completed.includes(lesson.id);
                      const active = currentLesson?.id === lesson.id;
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => isPaid && setActiveLesson(lesson)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                            !isPaid
                              ? 'text-muted-foreground/50 cursor-default'
                              : active
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                          }`}
                        >
                          {!isPaid
                            ? <Lock size={13} className="shrink-0" />
                            : done
                              ? <CheckCircle2 size={15} className="text-green-400 shrink-0" />
                              : <Circle size={15} className="shrink-0" />
                          }
                          <span className="truncate">{lesson.title}</span>
                        </button>
                      );
                    })}
                    {mod.quiz && isPaid && (
                      <Link
                        to={`/courses/${courseId}/quiz/${mod.id}`}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        <FileQuestion size={15} className="shrink-0 text-primary/70" />
                        <span>{mod.quiz.title}</span>
                        {progress?.quizScores?.[mod.id] !== undefined && (
                          <span className="ml-auto text-xs text-green-400">{progress.quizScores[mod.id]}%</span>
                        )}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {!isPaid ? (
              /* Payment gate */
              <div className="glass-card rounded-xl p-8 text-center flex flex-col items-center gap-5">
                <div className="text-5xl">{course.icon}</div>
                <div>
                  <h2 className="text-xl font-bold">{course.title}</h2>
                  <p className="text-muted-foreground text-sm mt-2 max-w-sm mx-auto">{course.description}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-4xl font-bold text-primary">R{course.price}</span>
                  <span className="text-xs text-muted-foreground">Once-off · Lifetime access</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  {[`${totalLessons} lessons across ${course.modules.length} modules`, `Module quizzes & progress tracking`, `Certificate of completion`].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-green-400" /> {i}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowPayment(true)}
                  className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <Lock size={16} /> Enroll for R{course.price}
                </button>
              </div>
            ) : currentLesson ? (
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <PlayCircle size={13} className="text-primary" /> Lesson
                    </div>
                    <h2 className="text-xl font-bold">{currentLesson.title}</h2>
                  </div>
                  <button
                    onClick={handleCompleteLesson}
                    disabled={completed.includes(currentLesson.id)}
                    className={`shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      completed.includes(currentLesson.id)
                        ? 'text-green-400 bg-green-400/10 cursor-default'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    <CheckCircle2 size={15} />
                    {completed.includes(currentLesson.id) ? 'Completed' : 'Mark complete'}
                  </button>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
                  {currentLesson.content.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-16">Select a lesson to begin</div>
            )}
          </main>
        </div>
      </div>

      {showPayment && (
        <PaymentModal course={course} onClose={() => setShowPayment(false)} />
      )}
    </div>
  );
}
