import type { SobrePersonagem, CuriosidadeCard as CuriosidadeCardType } from '../../types/types';
import { SobreCard } from './SobreCard';
import { CuriosidadesCard } from './CuriosidadeCard';


type Props = SobrePersonagem & CuriosidadeCardType;

export const PersonagemComCuriosidade = ({
  age,
  personality,
  ability,
  objective,
  title,
  curiosities, 
}: Props) => {
  return (
    <main className="cursor-pointer w-full max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center
                     bg-[var(--fundo-principal-escuro)]">
     <SobreCard
        age={age}
        personality={personality}
        ability={ability}
        objective={objective}
      ></SobreCard>
      <CuriosidadesCard
        title={title}
        curiosities={curiosities}
      ></CuriosidadesCard>
    </main>
  );
};

export default PersonagemComCuriosidade;