import ReactCurvedText from "react-curved-text";
import useLatestSong from "../hooks/useLatestSong";
import Card from "./Card";

import { SiSpotify } from "react-icons/si";

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default function SpotifyWidget() {
  const { song, isLoading, isError } = useLatestSong();

  // This does not recalculate on window
  // resize, but it's good enough for now
  const RADIUS_REM = 14;
  const RADIUS_PX = convertRemToPixels(RADIUS_REM);

  return (
    <Card
      spanClass="col-span-6 md:col-span-3"
      bgClass="bg-black relative" // relative!!!
      sizeClass="min-h-[300px]"
    >
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}

      {song && (
        <>
          <div className="flex flex-col justify-center items-center z-10">
            <a
              href={song.url}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 hover:scale-105 transition-all duration-300"
            >
              <img
                src={song.images[0].url}
                alt="album cover"
                className="w-40 h-40 rounded-sm"
              />
            </a>
            <div className="flex flex-row justify-center items-center mt-4 bg-white/10 backdrop-filter backdrop-blur-[2px] py-2 px-3 rounded-full border-[1.5px] border-white/10">
              <SiSpotify className="text-green-500 text-sm" />
              <p className="text-zinc-400 text-xs font-bold ml-2 uppercase">
                {song.isPlaying ? "Currently listening to" : "Last listened to"}
              </p>
            </div>
          </div>
          <div className="absolute animate-spin-very-slow">
            <ReactCurvedText
              width={RADIUS_PX}
              height={RADIUS_PX}
              cx={RADIUS_PX / 2}
              cy={RADIUS_PX / 2}
              rx={RADIUS_PX / 2}
              ry={RADIUS_PX / 2}
              text={`${song.name} • ${song.artists.join(", ")} 🎵`}
              textProps={{
                className: "text-sm uppercase",
                fill: "white",
              }}
            />
          </div>
        </>
      )}
    </Card>
  );
}
