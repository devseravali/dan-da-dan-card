import type { CuriosidadeCard as CuriosidadeCardType } from '../../types/types';

export const CuriosidadesCard = ({ title, curiosities }: CuriosidadeCardType) => {
  return (
    <div className="w-full p-4 rounded-xl
                    bg-[var(--fundo-card-escuro)]
                    flex flex-col gap-2 items-center text-center">
      <h3 className="text-[25px] font-bold text-[var(--destaque-escuro)] hover:text-[var(--hover-destaque-escuro)] transition-colors duration-300">{title}</h3>
      {curiosities.map((curio, index) => (
        <p key={index} className="text-[var(--texto-secundario-escuro)]">{curio}</p>
      ))}
    </div>
  );
};