import type { NomeCardProps } from '../../types/types';

export const NomeCard = ({ name }: NomeCardProps) => {
  return (
    <div className="text-center">
      <h2
        className="
          cursor-pointer
          inline-block
          text-[40px] font-bold
          text-[var(--destaque-escuro)]
          transition-colors duration-300
          hover:text-[var(--hover-destaque-escuro)]
          px-2 py-1
        "
      >
        {name}
      </h2>
    </div>
  );
};