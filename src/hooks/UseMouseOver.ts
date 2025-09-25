import { useState } from 'react';

export const useMouseOver = () => {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  return { isHovering, onMouseEnter, onMouseLeave };
};