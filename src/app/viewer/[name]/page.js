"use client";

import { useEffect } from "react";
import { use } from "react";
import { MODELS } from "@/constants/view-paths.constants";

function ViewerPage({ params }) {
  const resolvedParams = use(params);
  const { name } = resolvedParams;

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <div>
      <model-viewer
        ar
        camera-controls
        disable-pan
        shadow-intensity="2"
        ar-modes="webxr scene-viewer quick-look"
        src={MODELS[name]}
        alt="3D model"
        style={{ width: "100%", height: "500px" }}
      ></model-viewer>
    </div>
  );
}

export default ViewerPage;
