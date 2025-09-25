import type { ButtonLabelProps } from '../../types/types';
import { handleClick } from '../../logic/ButtonActions';

export const ButtonLabel = ({ label }: ButtonLabelProps) => {
  return (
    <div className="text-center">
      <button
        className="
          text-[20px] w-40 mb-5 p-3
          rounded-full font-bold
          cursor-pointer
          bg-[var(--botao-escuro)]
          text-[var(--botao-texto-escuro)]
          hover:bg-[var(--botao-hover-escuro)]
          hover:text-[var(--botao-texto-escuro)]
          transition-colors duration-300
        "
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
};