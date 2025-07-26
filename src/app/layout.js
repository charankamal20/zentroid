import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "auto",
  weight: ["700"],
});


export const metadata = {
  title: "Zentroid - AR/VR 3D Model Viewer",
  description: "Experience 3D models in augmented and virtual reality",
  keywords: "AR, VR, 3D models, augmented reality, virtual reality",
  openGraph: {
    title: "Zentroid - AR/VR 3D Model Viewer",
    description: "Experience 3D models in augmented and virtual reality",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.className}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..." crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
