import { useState } from "react";
import { clsxm } from "../../lib/utils";
import useLatestLocation from "../hooks/useLatestLocation";
import Flag from "./Flag";

function PulsingDot({ className }) {
  return (
    <div className={clsxm("absolute w-full h-full select-none", className)}>
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
  const { location, isLoading } = useLatestLocation();
  const [isMapBlurred, setIsMapBlurred] = useState(true);
  const placeholderImage = "/maps-placeholder.png";

  return (
    <div className="relative w-full h-full group">
      {/* Pulsing dot */}
      {!isMapBlurred && <PulsingDot className="z-10" />}
      {/* Info overlay */}
      <div className="absolute z-20 top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300 flex flex-col items-end justify-end p-6 leading-6">
        <span className="text-white/90">📍 I'm currently in</span>
        {
          // if the location is loading, show a placeholder
          isMapBlurred ? (
            <span className="animate-pulse w-36 h-6 mt-2 rounded bg-gray-400/80"></span>
          ) : (
            <span className="text-end text-white text-2xl">
              <b>{location.city}</b>, {location.region.trim()}
              <Flag country={location.region} className="ml-1" />
            </span>
          )
        }
      </div>
      {/* Placeholder blurred map */}
      <img
        src={placeholderImage}
        className={clsxm(
          "w-full h-full object-cover scale-110 z-[-1] relative",
          isMapBlurred ? "filter blur-sm" : "hidden"
        )}
      />
      {/* Actual map */}
      <img
        src={location.map}
        onLoad={() => setIsMapBlurred(false)}
        className={clsxm(
          "w-full h-full object-cover scale-110 z-[-1] relative",
          isMapBlurred && "hidden"
        )}
      />
    </div>
  );
}
