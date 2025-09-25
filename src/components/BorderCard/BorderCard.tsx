import type { ReactNode } from 'react';

type BordaCardProps = {
  children: ReactNode;
};

export const BordaCard = ({ children }: BordaCardProps) => {
  return (
    <div
      className="
        border-3 border-[var(--destaque-escuro)]
        rounded-xl
        p-2
      "
    >
      {children}
    </div>
  );
};