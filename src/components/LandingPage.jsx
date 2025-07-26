"use server";

import { cn } from "@/lib/utils";
import { MODELS_GLTF } from "@/constants/view-paths.constants";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { ModelPreloader } from "./ModelPreloader";

export const LandingPage = async () => {
  const redirectToStudio = (route) => {
    redirect(route);
  };

  return (
    <>
      <ModelPreloader />

      <div className="h-screen w-full flex flex-col items-center">
        <div
          className={cn(
            "-z-10 absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)] bg-black"></div>

        <div className="mx-auto px-8 h-full  w-full md:w-1/3 md:px-4 max-w-xl">
          <div className="gap-y-8 w-full flex flex-col items-center justify-center h-full">
            <div className="">
              <Link target="_blank" href="https://zentroid.com">
                <Image
                  src="/images/ZentroidLogo.png"
                  alt="Zentroid Studios"
                  width={200}
                  height={200}
                />
              </Link>
              {/*  */}
            </div>
            <div className="button-list">
              {Object.keys(MODELS_GLTF).map((item, index) => (
                <Link
                  prefetch
                  key={index + MODELS_GLTF[item].name}
                  href={"/viewer/" + MODELS_GLTF[item].name}
                  className="btn tracking-wide"
                >
                  {MODELS_GLTF[item].label}
                </Link>
              ))}
            </div>
            <hr className="bg-white w-4/6 md:w-4/6 opacity-40" />
            <div className="flex flex-col gap-y-2 -translate-y-2">
              <span className="my-4">Contact Us</span>
              <div className="flex gap-x-4">
                <Link
                  href="https://www.linkedin.com/company/zentroid-studios/"
                  target="_blank"
                >
                  <Linkedin size={28} />
                </Link>
                <Link
                  href="https://www.instagram.com/zentroid.studios/"
                  target="_blank"
                >
                  <Instagram size={28} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
