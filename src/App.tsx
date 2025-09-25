import { BrowserRouter } from 'react-router-dom';
import { ImagemCard } from "./components/ImagemCard/ImagemCard";
import { PersonagemComCuriosidade } from './components/SobrePersonagem/PersonagemComCuriosidade';
import { ButtonLabel } from './components/ButtonLabel/ButtonLabel';
import { NomeCard } from "./components/NomeCard/NomeCard";
import { TituloCard } from "./components/TituloCard/TituloCard";
import { BordaCard } from "./components/BorderCard/BorderCard";
import { ContainerCard } from './components/ContainerCard/ContainerCard';
import { okarun } from './data/okarun';
import './Styles/globals.css';


function App() {
  return (
   <BrowserRouter basename="/dan-da-dan-card/">
    <div className="w-full min-h-screen flex items-center justify-center bg-[var(--fundo-principal-escuro)] p-6">
    <BordaCard>
      <TituloCard titulo={okarun.title.titulo} />

      <ImagemCard src={okarun.image.src} alt={okarun.image.alt} />

      <NomeCard name={okarun.nome.name} />

      <ContainerCard>
        <PersonagemComCuriosidade
          age={okarun.sobre.age}
          personality={okarun.sobre.personality}
          ability={okarun.sobre.ability}
          objective={okarun.sobre.objective}
          title={okarun.curiosidade.title}
          curiosities={
          okarun.curiosidade.curiosities}
        ></PersonagemComCuriosidade>
      </ContainerCard>

      <ButtonLabel label={okarun.button.label} />
    </BordaCard>
    </div>
    </BrowserRouter>
  );
}

export default App;