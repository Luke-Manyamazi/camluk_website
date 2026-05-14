import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, BarChart2, CheckCircle, Lock } from 'lucide-react';
import ProgressBar from './ProgressBar';
import PaymentModal from './PaymentModal';
import { getTotalLessons, getProgressPercent } from '@/data/courses';

const levelColor = {
  Beginner:     'text-green-400 bg-green-400/10',
  Intermediate: 'text-yellow-400 bg-yellow-400/10',
  Advanced:     'text-red-400 bg-red-400/10',
};

export default function CourseCard({ course, enrollment }) {
  const [showPayment, setShowPayment] = useState(false);

  const totalLessons = getTotalLessons(course);
  const completed    = enrollment?.completedLessons?.length ?? 0;
  const percent      = enrollment ? getProgressPercent(course, enrollment.completedLessons) : 0;
  const isPaid       = enrollment?.paid === true;
  const isDone       = enrollment?.completed;

  return (
    <>
      <div className="glass-card rounded-xl p-5 flex flex-col gap-4 hover:border-primary/30 transition-all hover:-translate-y-1">
        <div className="flex items-start justify-between gap-3">
          <div className="text-3xl">{course.icon}</div>
          {isDone && (
            <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
              <CheckCircle size={12} /> Completed
            </span>
          )}
          {isPaid && !isDone && (
            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
              In Progress
            </span>
          )}
          {!isPaid && (
            <span className="text-lg font-bold text-primary">R{course.price}</span>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-foreground">{course.title}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{course.description}</p>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
          <span className="flex items-center gap-1"><BookOpen size={12} /> {totalLessons} lessons</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
          <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${levelColor[course.level] ?? ''}`}>
            <BarChart2 size={12} /> {course.level}
          </span>
        </div>

        {isPaid && (
          <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>{completed}/{totalLessons} lessons</span>
              <span>{percent}%</span>
            </div>
            <ProgressBar value={percent} />
          </div>
        )}

        <div className="mt-auto pt-3 border-t border-border">
          {isPaid ? (
            <Link
              to={`/courses/${course.id}`}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              {isDone ? 'Review course' : 'Continue learning'}
            </Link>
          ) : (
            <button
              onClick={() => setShowPayment(true)}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Lock size={14} /> Enroll — R{course.price}
            </button>
          )}
        </div>
      </div>

      {showPayment && (
        <PaymentModal course={course} onClose={() => setShowPayment(false)} />
      )}
    </>
  );
}
