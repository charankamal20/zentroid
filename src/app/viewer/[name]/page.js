"use client";

import { MODELS_GLTF } from "@/constants/view-paths.constants";
import { ChevronLeft } from "lucide-react";
import { useRef, useEffect, useState, use } from "react";

export default function ViewerPage({ params }) {
  const args = use(params);
  const { name } = args;
  const modelUrl = MODELS_GLTF[name].aws_path;
  const modelViewerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleBackClick = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    import("@google/model-viewer");

    const modelViewer = modelViewerRef.current;

    const handleLoad = () => setIsLoading(false);

    if (modelViewer) {
      // If model is already loaded fast (e.g., cached), remove loading right away.
      if (modelViewer.loaded) {
        setIsLoading(false);
      } else {
        modelViewer.addEventListener("load", handleLoad);
      }
    }
    // Clean-up on unmount
    return () => {
      if (modelViewer) modelViewer.removeEventListener("load", handleLoad);
    };
  }, [modelUrl]);

  return modelUrl ? (
    <div className="relative w-full h-screen bg-white">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="h-4 w-xl flex justify-center">
            <div className="minimal-progress">
              <div className="progress-line"></div>
            </div>
          </div>
        </div>
      )}
      <model-viewer
        ref={modelViewerRef}
        src={modelUrl}
        alt="A 3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        loading="eager"
        style={{ width: "100%", height: "100%" }}
      ></model-viewer>
      <button onClick={handleBackClick} className="absolute top-4 left-4 z-20">
        <ChevronLeft size={32} className="text-black" />
      </button>
    </div>
  ) : (
    <div>Model not found</div>
  );
}
