"use client";

import { useEffect } from "react";
import { use } from "react";
import { MODELS_GLTF } from "@/constants/view-paths.constants";

function ViewerPage({ params }) {
  const resolvedParams = use(params);
  const { name } = resolvedParams;
  const modelUrl = MODELS_GLTF[name].path;

  const handleBackClick = () => {
    window.location.href = '/home';
  };

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    modelUrl ?
      (<div className="wrapper">
        <button className="btn back-btn" onClick={handleBackClick}>
          <span className="material-symbols-rounded">
            arrow_back_ios_new
          </span>
          Back
        </button>
        <model-viewer
          ar
          camera-controls
          disable-pan
          shadow-intensity="2"
          ar-modes="scene-viewer quick-look"
          src={modelUrl}
          alt="3D model"
          className="model-viewer-component"
          scale="0.5 0.5 0.5"
        ></model-viewer>
      </div >)
      :
      <h1 className="">
        Error loading the 3D Model
      </h1>
  );
}

export default ViewerPage;
