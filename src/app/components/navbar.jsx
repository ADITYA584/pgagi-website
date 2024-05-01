"use client";

import React, { useState } from "react";
import Calendlylink from "../buttons/callbutton";
import Image from "next/image";
import Link from "next/link";
import WhatwedoHover from "./OnhoverComponents/Hoverwhatwedo";
import Hoverwhatwedo from "./OnhoverComponents/Hoverwhatwedo";

export default function Navbar() {
  const [showIndustries, setShowIndustries] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showWhatwedo, setShowWhatwedo] = useState(false);
  const [showWhoweare, setShowwhoweare] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleIndustries = () => {
    setShowIndustries(!showIndustries);
    setShowAboutUs(false); // Close About Us section
    setShowSolutions(false); // Close Solutions section
    setShowAIResources(false); // Close AI Resources section
    setSelectedOption("Industries");
  };

  const toggleAboutUs = () => {
    if (!showAboutUs) {
      setShowAboutUs(true);
      setShowIndustries(false); // Close Industries section
      setShowSolutions(false); // Close Solutions section
      setShowAIResources(false); // Close AI Resources section
      setSelectedOption("About Us");
    }
  };

  const toggleWhatwedo = () => {
    setShowWhatwedo(!showWhatwedo);
    setShowIndustries(false); // Close Industries section
    setShowAboutUs(false); // Close About Us section
    setShowwhoweare(false); // Close AI Resources section
    setSelectedOption("Solutions");
  };

  const togglewhoweare = () => {
    setShowwhoweare(!showWhoweare);
    setShowIndustries(false); // Close Industries section
    setShowAboutUs(false); // Close About Us section
    setShowWhatwedo(false); // Close Solutions section
    setSelectedOption("AI resources");
  };

  return (
    <div id="navBar" className="md:h-[20vh]">
      {/* Thin horizontal blue line */}
      <div
        className="p-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "30px",
          width: "100%",
        }}
      >
        <span style={{ marginRight: "10px" }} className="text-primary_text">
          AI Calling Agent
        </span>
        <div>
          <Link
            href="/aboutus"
            style={{ fontWeight: "bold" }}
            className="text-primary_text"
          >
            Learn more
          </Link>
        </div>
      </div>
      <div className="  p-2 hidden sm:flex sm:justify-evenly sm-px-6 md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24 ">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center xl:pl-16 md:pl-10">
          <div className="flex-shrink-0  ">
            <Image
              src="/images/pgagi_logo.png"
              alt="Company logo"
              className=" "
              width={60}
              height={60}
            />
          </div>
          <div className="text-md font-bold  text-primary_text">PG-AGI</div>
        </div>
        {/* Navbar links */}
        <div className="header-links contents font-semibold text-base lg:text-base text-primary_text ">
          <ul className="flex items-center ml-4  lg:ml-5 xl:ml-2 lg:mr-8">
            <li className="p-2.5 xl:p-6 text-center">
              <a className="text-decoration-none">
                <span>Who we are</span>
              </a>
            </li>
            <li className="p-2.5 xl:p-6">
              <button
                onMouseEnter={() => toggleWhatwedo("whatwedo")}
                className="focus:outline-none flex items-center"
              >
                <span>What we do</span>
              </button>
            </li>
            <li className="p-2.5 xl:p-6">
              <button
                MouseEnter={() => togglewhoweare("whoweare")}
                className="focus:outline-none flex items-center"
              >
                <span>what we think</span>
              </button>
            </li>
          </ul>
        </div>
        {/* Search bar and button */}
        <div className="  md: lg: flex items-center text-primary_text ">
          <button className="border-2 rounded-lg border-[#3237C0] border-solid py-3 px-6">
            Contact us
          </button>
        </div>
      </div>
      {showWhatwedo && <Hoverwhatwedo setShowWhatwedo={setShowWhatwedo} />}
      {showWhoweare && <Hoverwhatwedo setShowwhoweare={setShowwhoweare} />}
    </div>
  );
}
