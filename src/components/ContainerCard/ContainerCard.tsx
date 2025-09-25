import { type ReactNode } from "react";

interface ContainerCardProps {
  children: ReactNode;
}

export const ContainerCard = ({ children }: ContainerCardProps) => {
  return (
    <div
      className="
        flex flex-col justify-center items-center
        bg-[var(--fundo-principal-escuro)]
        p-4 rounded-xl
        transition-shadow duration-300
      "
    >
      {children}
    </div>
  );
};