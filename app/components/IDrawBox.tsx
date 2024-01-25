"use client";

import { useEffect, useRef } from "react";
import { iDraw } from "idraw";

const IDrawBox = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const idraw = new iDraw(ref.current, {
        width: 600,
        height: 400,
        devicePixelRatio: 1,
      });
      idraw.addElement({
        name: "rect-001",
        x: 140,
        y: 120,
        w: 200,
        h: 100,
        type: "rect",
        detail: {
          background: "#f7d3c1",
          borderRadius: 20,
          borderWidth: 4,
          borderColor: "#ff6032",
        },
        uuid: "",
      });
    }
  }, []);

  return <div className="w-full" ref={ref} />;
};

export default IDrawBox;
