export interface SobrePersonagem { 
  age: number | string; 
  personality: string;
  ability: string;
  objective: string;
}

export interface NomeCardProps {
  name: string;
}

export interface CuriosidadeCard {
  title: string;
  curiosities: string[];
}

export interface ImagemProps {
  src: string;
  alt: string;
} 

export interface ButtonLabelProps {
  label: string; 
}

export interface TituloCard {
  titulo: string;
}

export interface BordaCard {
  borda: string;
}