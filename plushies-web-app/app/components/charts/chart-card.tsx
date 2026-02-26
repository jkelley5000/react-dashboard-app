import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ChartCard({ title, subtitle, children }: ChartCardProps) {
  return (
    <article className="theme-card theme-card-padded theme-shadow-sm">
      <header className="mb-4">
        <h2 className="text-lg font-semibold theme-text-primary">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm theme-text-muted">{subtitle}</p> : null}
      </header>
      <div className="h-80 w-full">{children}</div>
    </article>
  );
}
