import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { GraduationCap, Loader2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirm: z.string(),
}).refine((d) => d.password === d.confirm, {
  message: 'Passwords do not match',
  path: ['confirm'],
});

export default function Register() {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit({ name, email, password }) {
    setAuthError('');
    try {
      await registerUser(name, email, password);
      navigate('/dashboard');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setAuthError('An account with this email already exists.');
      } else {
        setAuthError('Failed to create account. Please try again.');
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <GraduationCap className="text-primary" size={28} />
          </div>
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm mt-1">Start learning today — it's free</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-2xl p-6 flex flex-col gap-4">
          {authError && (
            <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-lg">{authError}</p>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">Full name</label>
            <input
              {...register('name')}
              type="text"
              placeholder="Jane Doe"
              className="bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary transition-colors"
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
          </div>

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

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">Confirm password</label>
            <input
              {...register('confirm')}
              type="password"
              placeholder="••••••••"
              className="bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary transition-colors"
            />
            {errors.confirm && <p className="text-xs text-destructive">{errors.confirm.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isSubmitting && <Loader2 size={16} className="animate-spin" />}
            Create account
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
