export interface Model {
  name: string;
  label: string;
  path: string;
}

export const MODELS_GLTF: Record<string, Model> = {
  almirah: {
    name: "almirah",
    label: "Almirah",
    path: "/gltf-models/Almira/almira.gltf",
  },
  nike: {
    name: "nike",
    label: "Nike Air DT Max 96 Colorado Away Sneakers",
    path: "/gltf-models/Nike Air DT Max 96 Colorado Away Sneakers/Nike Air DT Max 96 Colorado Away Sneakers.gltf",
  },
  sunglasses: {
    name: "sunglasses",
    label: "Dior Signature",
    path: "/gltf-models/Dior signature/Dior signature.gltf",
  },
  sunglasses2: {
    name: "sunglasses2",
    label: "Clubmaster Way",
    path: "/gltf-models/Clubmaster Way/Clubmaster Way.gltf",
  },
  watch: {
    name: "watch",
    label: "Graham Fortress City GMT Red",
    path: "/gltf-models/Graham Watch/GRAHAM FORTRESS CITY GMT RED.gltf",
  },
};
