"use server";

import { LandingPage } from "@/components/LandingPage";
import Head from "next/head";

export default async function HomePage() {
  return (
    <>
      <Head>
        {/* Basic Open Graph */}
        <title>Zentroid – AR/VR Model Viewer</title>
        <meta property="og:title" content="Zentroid Studios" />
        <meta
          property="og:description"
          content="Experience 3D models in augmented and virtual reality."
        />
        <meta property="og:url" content="https://studios.classikh.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="A 3D AR/VR model preview" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zentroid – AR/VR 3D Model Viewer" />
        <meta
          name="twitter:description"
          content="Experience 3D models in AR/VR on Zentroid."
        />
        {/* Canonical URL */}
        <link rel="canonical" href="https://studio.classikh.me/" />
      </Head>
      <LandingPage />
    </>
  );
}
