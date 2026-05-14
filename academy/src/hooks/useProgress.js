import { useState, useEffect } from 'react';
import {
  doc, getDoc, setDoc, updateDoc,
  serverTimestamp, arrayUnion,
} from 'firebase/firestore';
import { db } from '@/firebase';
import { useAuth } from '@/contexts/AuthContext';

export function useProgress(courseId) {
  const { user } = useAuth();
  const [progress, setProgress] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(true);

  const ref = user && courseId
    ? doc(db, 'users', user.uid, 'enrollments', courseId)
    : null;

  useEffect(() => {
    if (!ref) { setLoadingProgress(false); return; }
    getDoc(ref).then((snap) => {
      setProgress(snap.exists() ? snap.data() : null);
      setLoadingProgress(false);
    });
  }, [user, courseId]);

  async function enroll() {
    const data = {
      enrolledAt: serverTimestamp(),
      completedLessons: [],
      quizScores: {},
      completed: false,
      completedAt: null,
    };
    await setDoc(ref, data);
    setProgress(data);
  }

  async function completeLesson(lessonId) {
    if (!progress) return;
    await updateDoc(ref, { completedLessons: arrayUnion(lessonId) });
    setProgress((p) => ({
      ...p,
      completedLessons: p.completedLessons.includes(lessonId)
        ? p.completedLessons
        : [...p.completedLessons, lessonId],
    }));
  }

  async function saveQuizScore(moduleId, score) {
    if (!progress) return;
    await updateDoc(ref, { [`quizScores.${moduleId}`]: score });
    setProgress((p) => ({
      ...p,
      quizScores: { ...p.quizScores, [moduleId]: score },
    }));
  }

  async function markCourseComplete() {
    if (!progress) return;
    await updateDoc(ref, { completed: true, completedAt: serverTimestamp() });
    setProgress((p) => ({ ...p, completed: true }));
  }

  return { progress, loadingProgress, enroll, completeLesson, saveQuizScore, markCourseComplete };
}
