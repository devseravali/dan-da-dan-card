import type { SobrePersonagem } from '../../types/types';

export const SobreCard = ({ age, personality, ability, objective }: SobrePersonagem) => {
  return (
    <div className="w-full p-4 rounded-xl
                    bg-[var(--fundo-card-escuro)]
                    text-[var(--texto-secundario-escuro)]
                    flex flex-col gap-2 items-center text-center">
      <p className="text-[25px] font-bold text-[var(--destaque-escuro)] hover:text-[var(--hover-destaque-escuro)] transition-colors duration-300">{age}</p>
      <p>{personality}</p>
      <p>{objective}</p>
      <p>{ability}</p>
    </div>
  );
};