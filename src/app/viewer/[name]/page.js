"use client";

import { useEffect } from "react";
import { use } from "react";
import { MODELS_GLTF } from "@/constants/view-paths.constants";
import { ChevronLeft } from "lucide-react"

function ViewerPage({ params }) {
  const resolvedParams = use(params);
  const { name } = resolvedParams;
  const modelUrl = MODELS_GLTF[name].aws_path;

  const handleBackClick = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    modelUrl ?
      (<div className="wrapper">
        <button className="btn back-btn" onClick={handleBackClick}>
          <ChevronLeft className="back-btn-icon"/> Back
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
