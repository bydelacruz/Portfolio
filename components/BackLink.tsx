'use client';
export default function BackLink({
  className = '',
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type='button'
      className={className}
      onClick={() => window.history.back()}>
      {children}
    </button>
  );
}
