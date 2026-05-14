import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { GraduationCap, Loader2 } from 'lucide-react';

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit({ email, password }) {
    setAuthError('');
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setAuthError('Invalid email or password.');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <GraduationCap className="text-primary" size={28} />
          </div>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground text-sm mt-1">Sign in to continue learning</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-2xl p-6 flex flex-col gap-4">
          {authError && (
            <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-lg">{authError}</p>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">Email</label>
            <input
              {...register('email')}
              type="email"
              placeholder="you@example.com"
              className="bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary transition-colors"
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">Password</label>
            <input
              {...register('password')}
              type="password"
              placeholder="••••••••"
              className="bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary transition-colors"
            />
            {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isSubmitting && <Loader2 size={16} className="animate-spin" />}
            Sign in
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:underline">Create one</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
