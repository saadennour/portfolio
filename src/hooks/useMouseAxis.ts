import { useEffect, useState } from "react";

export const useMouseAxis = () => {
  const [mouseAxis, setMouseAxis] = useState({ x: 0, y: 0 });

  const updateMouseAxis = (e: any) => {
    setMouseAxis({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMouseAxis);
    return () => {
      window.removeEventListener("mousemove", updateMouseAxis);
    };
  }, []);

  return mouseAxis;
};
