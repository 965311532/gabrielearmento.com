import clsx from "clsx";
import { useEffect, useState } from "react";
import Card from "./Card";
import Flag from "./Flag";

function PulsingDot({ className }) {
  return (
    <div className={clsx("absolute w-full h-full", className)}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="block h-8 w-8 animate-ping-slow rounded-full bg-blue-400"></span>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="block h-[24px] w-[24px] rounded-full bg-black/40 translate-y-[1px] blur-sm"></span>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="block h-4 w-4 rounded-full bg-blue-600 ring-4 ring-white"></span>
      </div>
    </div>
  );
}

export default function MapsWidget() {
  const [latestLocation, setLatestLocation] = useState({
    city: "Loading...",
    region: "Loading...",
    map: "/maps-placeholder.png",
  });
  const [isMapBlurred, setIsMapBlurred] = useState(true);

  const fetchImage = async () => {
    const locationData = await fetch("/api/latest-location");
    const location = await locationData.json();
    // Download image and create blob to obscure api key
    const mapData = await fetch(location.map);
    const mapBlob = await mapData.blob();
    location.map = URL.createObjectURL(mapBlob);
    // Update state
    setLatestLocation(location);
    setIsMapBlurred(false);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Card
      sizeClass="h-full"
      spanClass="col-span-6 md:col-span-2"
      bgClass="bg-black relative p-0 overflow-hidden group"
    >
      {!isMapBlurred && <PulsingDot className="z-10" />}

      <div className="absolute z-20 top-0 left-0 w-full h-full bg-black/50 hidden group-hover:block">
        <div className="flex flex-col items-end justify-end h-full w-full p-6">
          <span className="leading-6 text-white/90">📍 I'm currently in</span>
          <span className="leading-6 text-2xl flex flex-row items-center text-white">
            <span className="font-bold">{latestLocation.city}</span>
            <span className="">, {latestLocation.region}</span>
            <Flag country={latestLocation.region} className="ml-1" />
          </span>
        </div>
      </div>

      <img
        src={latestLocation.map}
        alt="latest location"
        className={clsx(
          "w-full h-full object-cover scale-110", // make the image fill the container
          isMapBlurred ? "filter blur-sm" : "filter-none" // blur the image
        )}
      />
    </Card>
  );
}
