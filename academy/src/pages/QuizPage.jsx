import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getCourse } from '@/data/courses';
import { useProgress } from '@/hooks/useProgress';
import Navbar from '@/components/Navbar';
import { CheckCircle2, XCircle, ArrowLeft, Award } from 'lucide-react';

export default function QuizPage() {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const course = getCourse(courseId);
  const mod = course?.modules.find((m) => m.id === moduleId);
  const quiz = mod?.quiz;
  const { progress, saveQuizScore } = useProgress(courseId);

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const previousScore = progress?.quizScores?.[moduleId];

  if (!quiz) return (
    <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">
      Quiz not found.
    </div>
  );

  function select(qIdx, optIdx) {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qIdx]: optIdx }));
  }

  async function submit() {
    const correct = quiz.questions.filter((q, i) => answers[i] === q.answer).length;
    const pct = Math.round((correct / quiz.questions.length) * 100);
    setScore(pct);
    setSubmitted(true);
    await saveQuizScore(moduleId, pct);
  }

  const allAnswered = quiz.questions.every((_, i) => answers[i] !== undefined);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 pt-24 pb-16">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to course
        </button>

        <div className="glass-card rounded-2xl p-6">
          <h1 className="text-xl font-bold mb-1">{quiz.title || `${mod.title} — Quiz`}</h1>
          <p className="text-sm text-muted-foreground mb-6">
            {quiz.questions.length} questions · {mod.title}
            {previousScore !== undefined && (
              <span className="ml-3 text-primary">Previous best: {previousScore}%</span>
            )}
          </p>

          {quiz.questions.map((q, qIdx) => (
            <div key={qIdx} className="mb-6 last:mb-0">
              <p className="font-medium mb-3 text-sm">{qIdx + 1}. {q.question}</p>
              <div className="flex flex-col gap-2">
                {q.options.map((opt, oIdx) => {
                  const selected = answers[qIdx] === oIdx;
                  const isCorrect = oIdx === q.answer;
                  let style = 'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground';
                  if (submitted) {
                    if (isCorrect) style = 'border border-green-500 bg-green-500/10 text-green-400';
                    else if (selected && !isCorrect) style = 'border border-destructive bg-destructive/10 text-destructive';
                    else style = 'border border-border text-muted-foreground opacity-60';
                  } else if (selected) {
                    style = 'border border-primary bg-primary/10 text-primary';
                  }
                  return (
                    <button
                      key={oIdx}
                      onClick={() => select(qIdx, oIdx)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${style}`}
                    >
                      <span className="flex items-center gap-3">
                        {submitted && isCorrect && <CheckCircle2 size={15} />}
                        {submitted && selected && !isCorrect && <XCircle size={15} />}
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
              {submitted && q.explanation && (
                <p className="mt-2 text-xs text-muted-foreground bg-secondary px-3 py-2 rounded-lg">
                  💡 {q.explanation}
                </p>
              )}
            </div>
          ))}

          {!submitted ? (
            <button
              onClick={submit}
              disabled={!allAnswered}
              className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-40"
            >
              Submit answers
            </button>
          ) : (
            <div className="mt-8 text-center">
              <div className={`text-5xl font-bold mb-2 ${score >= 70 ? 'text-green-400' : 'text-destructive'}`}>
                {score}%
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                {score >= 70 ? '🎉 Great work! You passed.' : 'Keep studying and try again.'}
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => { setSubmitted(false); setAnswers({}); setScore(null); }}
                  className="px-5 py-2.5 border border-border rounded-xl text-sm hover:bg-secondary transition-colors"
                >
                  Retry quiz
                </button>
                <Link
                  to={`/courses/${courseId}`}
                  className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Continue course
                </Link>
              </div>
              {score === 100 && (
                <Link
                  to={`/courses/${courseId}/certificate`}
                  className="mt-4 inline-flex items-center gap-2 text-yellow-400 text-sm hover:underline"
                >
                  <Award size={16} /> Check your certificate
                </Link>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
