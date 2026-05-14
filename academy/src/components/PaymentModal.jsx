import { X, CheckCircle2, CreditCard, Building2, Clock3, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { redirectToPayFast } from '@/utils/payfast';
import { getTotalLessons } from '@/data/courses';

const paymentMethods = [
  { icon: <CreditCard size={18} />, label: 'Credit / Debit Card', desc: 'Visa, Mastercard, Amex' },
  { icon: <Building2 size={18} />, label: 'Instant EFT',          desc: 'All major SA banks' },
  { icon: <Clock3 size={18} />,    label: 'Pay Later',            desc: 'Mobicred & more' },
];

export default function PaymentModal({ course, onClose }) {
  const { user } = useAuth();
  const totalLessons = getTotalLessons(course);

  function handlePay() {
    redirectToPayFast({
      courseId:    course.id,
      courseTitle: course.title,
      price:       course.price,
      userEmail:   user.email,
      userName:    user.displayName || user.email,
      userId:      user.uid,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-2xl w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{course.icon}</span>
            <div>
              <h2 className="font-bold text-lg">{course.title}</h2>
              <p className="text-xs text-muted-foreground">{course.level} · {course.duration}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors mt-1">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5">
          {/* Price */}
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">R{course.price}</div>
            <p className="text-sm text-muted-foreground mt-1">Once-off payment · Lifetime access</p>
          </div>

          {/* What's included */}
          <div className="bg-secondary/50 rounded-xl p-4 flex flex-col gap-2">
            {[
              `${totalLessons} structured lessons`,
              `${course.modules.length} module quizzes`,
              'Progress tracking',
              'Certificate of completion',
              'Lifetime access to content',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={14} className="text-green-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* Payment methods */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Payment methods
            </p>
            <div className="flex flex-col gap-2">
              {paymentMethods.map((m) => (
                <div key={m.label} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary/40">
                  <span className="text-primary">{m.icon}</span>
                  <div>
                    <div className="text-sm font-medium">{m.label}</div>
                    <div className="text-xs text-muted-foreground">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handlePay}
            className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <ShieldCheck size={18} />
            Pay R{course.price} securely
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Secured by PayFast · You will be redirected to complete payment
          </p>
        </div>
      </div>
    </div>
  );
}
