export interface Model {
  name: string;
  label: string;
  path: string;
  aws_path: string;
}

("https://kaythecosmic.github.io/zentroid-models/");

export const MODELS_GLTF: Record<string, Model> = {
  almirah: {
    name: "almirah",
    label: "Almirah",
    path: "https://kaythecosmic.github.io/zentroid-models/gltf-models/Almira/Almira.gltf",
    aws_path:
      "https://zentroid.s3.eu-north-1.amazonaws.com/gltf-models/Almira/Almira.gltf",
  },
  nike: {
    name: "nike",
    label: "Nike Air DT Max 96 Colorado Away Sneakers",
    path: "https://kaythecosmic.github.io/zentroid-models/gltf-models/Nike%20Air%20DT%20Max%2096%20Colorado%20Away%20Sneakers/Nike%20Air%20DT%20Max%2096%20Colorado%20Away%20Sneakers.gltf",
    aws_path:
      "https://zentroid.s3.eu-north-1.amazonaws.com/gltf-models/Nike%20Air%20DT%20Max%2096%20Colorado%20Away%20Sneakers/Nike%20Air%20DT%20Max%2096%20Colorado%20Away%20Sneakers.gltf",
  },
  sunglasses: {
    name: "sunglasses",
    label: "Dior Signature",
    path: "https://kaythecosmic.github.io/zentroid-models/gltf-models/Dior%20signature/Dior%20signature.gltf",
    aws_path:
      "https://zentroid.s3.eu-north-1.amazonaws.com/gltf-models/Dior%20signature/Dior%20signature.gltf",
  },
  sunglasses2: {
    name: "sunglasses2",
    label: "Clubmaster Way",
    path: "https://kaythecosmic.github.io/zentroid-models/gltf-models/Clubmaster%20Way/Clubmaster%20Way.gltf",
    aws_path:
      "https://zentroid.s3.eu-north-1.amazonaws.com/gltf-models/Clubmaster%20Way/Clubmaster%20Way.gltf",
  },
  watch: {
    name: "watch",
    label: "Graham Fortress City GMT Red",
    path: "https://kaythecosmic.github.io/zentroid-models/gltf-models/Graham%20Watch/GRAHAM%20FORTRESS%20CITY%20GMT%20RED.gltf",
    aws_path:
      "https://zentroid.s3.eu-north-1.amazonaws.com/gltf-models/Graham%20Watch/GRAHAM%20FORTRESS%20CITY%20GMT%20RED.gltf",
  },
};
