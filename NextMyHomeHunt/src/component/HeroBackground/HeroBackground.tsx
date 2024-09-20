"use client";
import React from "react";
import { Image } from "@/component/core/Image";
import { PropertySearchBox } from "../PropertySearchBox";

export const HeroBackground = () => {
  return (
    <>
      <div className="relative">
        <Image h={350} src="/assets/hero-background.jpg" />
        <div className="absolute inset-0 bg-black opacity-55"></div>
        <div className="absolute inset-0 top-[100%] flex items-center">
          <PropertySearchBox />
        </div>
      </div>
    </>
  );
};
