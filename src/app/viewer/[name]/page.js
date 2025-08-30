"use client";

import { MODELS_GLTF } from "@/constants/view-paths.constants";
import { ChevronLeft } from "lucide-react";
import { useRef, useEffect, useState, use } from "react";

export default function ViewerPage({ params }) {
  const args = use(params);
  const { name } = args;
  const model = MODELS_GLTF[name];
  const modelUrl = model.aws_path;
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
        modelViewer.exposure = model?.exposure;
      }
    }
    // Clean-up on unmount
    return () => {
      if (modelViewer) modelViewer.removeEventListener("load", handleLoad);
    };
  }, [modelUrl]);

  return modelUrl ? (
    <div className="relative w-full h-dvh bg-white">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col gap-4 justify-center">
            <div className="text-neutral-800 max-w-52 font-light animate-pulse text-center py-16">
              Please wait while we are loading the best quality model for you.
            </div>
            <div className="h-4 flex justify-center">
              <div className="minimal-progress">
                <div className="progress-line"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <model-viewer
        ref={modelViewerRef}
        src={modelUrl}
        alt="3D model"
        environment-image={model?.environment_image_path}
        shadow-intensity="1"
        ar
        disable-tap
        touch-action="pan-y"
        ar-modes="scene-viewer quick-look"
        xr-environment
        camera-controls
        loading="eager"
        style={{ width: "100%", height: "100%", backgroundColor: "unset" }}
      ></model-viewer>
      <button
        onClick={handleBackClick}
        className="absolute top-4 left-4 z-20 cursor-pointer"
      >
        <ChevronLeft size={32} className="text-black" />
      </button>
    </div>
  ) : (
    <div>Model not found</div>
  );
}
