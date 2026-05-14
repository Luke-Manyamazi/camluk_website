import { Link } from 'react-router-dom';
import { BookOpen, Clock, BarChart2, CheckCircle } from 'lucide-react';
import ProgressBar from './ProgressBar';
import { getTotalLessons, getProgressPercent } from '@/data/courses';

const levelColor = {
  Beginner: 'text-green-400 bg-green-400/10',
  Intermediate: 'text-yellow-400 bg-yellow-400/10',
  Advanced: 'text-red-400 bg-red-400/10',
};

export default function CourseCard({ course, enrollment }) {
  const totalLessons = getTotalLessons(course);
  const completed = enrollment?.completedLessons?.length ?? 0;
  const percent = enrollment ? getProgressPercent(course, enrollment.completedLessons) : 0;
  const isEnrolled = !!enrollment;
  const isDone = enrollment?.completed;

  return (
    <Link
      to={`/courses/${course.id}`}
      className="glass-card rounded-xl p-5 flex flex-col gap-4 hover:border-primary/30 transition-all hover:-translate-y-1 group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-3xl">{course.icon}</div>
        {isDone && (
          <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
            <CheckCircle size={12} /> Completed
          </span>
        )}
        {isEnrolled && !isDone && (
          <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
            In Progress
          </span>
        )}
      </div>

      <div>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{course.description}</p>
      </div>

      <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
        <span className="flex items-center gap-1">
          <BookOpen size={12} /> {totalLessons} lessons
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} /> {course.duration}
        </span>
        <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${levelColor[course.level] ?? ''}`}>
          <BarChart2 size={12} /> {course.level}
        </span>
      </div>

      {isEnrolled && (
        <div>
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>{completed}/{totalLessons} lessons</span>
            <span>{percent}%</span>
          </div>
          <ProgressBar value={percent} />
        </div>
      )}

      {!isEnrolled && (
        <div className="mt-auto pt-2 border-t border-border">
          <span className="text-xs text-primary font-medium">Enroll now →</span>
        </div>
      )}
    </Link>
  );
}
