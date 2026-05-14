export default function ProgressBar({ value = 0, className = '' }) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={`h-2 bg-secondary rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-primary rounded-full transition-all duration-500"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
