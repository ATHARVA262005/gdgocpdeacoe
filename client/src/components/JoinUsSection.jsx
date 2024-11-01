import React from "react";
import { cn } from "../lib/utils";
import DotPattern from "./ui/DotPattern";
import ShimmerButton from "./ui/ShimmerBtton";
import { Link } from "react-router-dom";

export function JoinUsSection() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black">
        JOIN US
      </p>
      <Link to={"https://gdg.community.dev/gdg-on-campus-pune-district-education-associations-college-of-engineering-pune-india/"} target="blank">
      <ShimmerButton className="shadow-2xl mt-5">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Community Page
        </span>
      </ShimmerButton>
      </Link>
      
    </div>
  );
}

export default JoinUsSection;
