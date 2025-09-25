import type { TituloCard as TituloCardType } from '../../types/types';
import { useMouseOver } from '../../hooks/UseMouseOver';

export const TituloCard = ({ titulo }: TituloCardType) => {
  const { isHovering, onMouseEnter, onMouseLeave } = useMouseOver();
  return (
    <p
      className={`
        text-center text-[30px] mb-5 font-extrabold cursor-pointer
        text-[var(--destaque-escuro)]
        transition-colors duration-300
        hover:text-[var(--hover-destaque-escuro)] 
        ${isHovering ? "uppercase" : ""}
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      { isHovering ? titulo.toUpperCase() : titulo}
    </p>
  );
};