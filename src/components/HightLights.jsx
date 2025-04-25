import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import watch from "../../public/assets/images/watch.svg";
import right from "../../public/assets/images/right.svg";
import VideoCarousel from "./VideoCarousel";

const HightLights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen h-full bg-zinc common-padding overflow-hidden"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-ful md:flex  items-end justify-between">
          <h1 id="title" className="section-heading">
            {" "}
            Get the highlights
          </h1>

          <div className="flex flex-wrap gap-5 items-end">
            <p className="link">
              Watch the film
              <img src={watch} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={right} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default HightLights;
