import type { ImagemProps } from '../../types/types';

export const ImagemCard = ({ src, alt }: ImagemProps) => {
  return (
    <div className="flex justify-center items-center rounded-2xl transition-transform duration-300">
      <img
        className="w-40 h-40 rounded-full object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );
};