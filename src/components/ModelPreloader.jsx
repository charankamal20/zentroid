"use client";
import { useEffect } from "react";
import { MODELS_GLTF } from "@/constants/view-paths.constants";

export const ModelPreloader = () => {
  useEffect(() => {
    // Preload high-priority models (the ones users click most)
    const priorityModels = ["nike", "sunglasses", "watch"];

    priorityModels.forEach((modelName) => {
      if (MODELS_GLTF[modelName]) {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = MODELS_GLTF[modelName].aws_path;
        link.as = "fetch";
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      }
    });

    // Preload model-viewer script
    const script = document.createElement("link");
    script.rel = "modulepreload";
    script.href =
      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);
  }, []);

  return null; // Renders nothing - pure performance optimization
};
