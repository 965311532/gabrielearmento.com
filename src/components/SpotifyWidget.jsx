import ReactCurvedText from "react-curved-text";
import { CgSpinner } from "react-icons/cg";
import { SiSpotify } from "react-icons/si";
import { clsxm } from "../../lib/utils";
import useLatestSong from "../hooks/useLatestSong";
import { CardHeader } from "./Card";

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function PlayingSpotifyIcon({ className }) {
  return (
    <span className={clsxm("relative", className)}>
      <SiSpotify className="relative -mb-1 z-10 text-green-400" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="-mb-1 z-[-1] relative block h-24 w-24 animate-ping-very-slow rounded-full bg-green-500/60"></span>
      </div>
    </span>
  );
}

function SpotifyIcon({ className }) {
  return <SiSpotify className={clsxm("-mb-1", className)} />;
}

export function SpotifyCardHeader({ playing }) {
  return (
    <CardHeader
      title={playing ? "Now playing" : "Last played"}
      icon={playing ? PlayingSpotifyIcon : SpotifyIcon}
    />
  );
}

export default function SpotifyWidget() {
  const { song, isLoading } = useLatestSong();

  // This does not recalculate on window
  // resize, but it's good enough for now
  const RADIUS_REM = 13;
  const RADIUS_PX = convertRemToPixels(RADIUS_REM);

  return (
    <>
      {isLoading && (
        <div className="h-full flex items-center justify-center">
          <CgSpinner className="text-white text-3xl animate-spin" />
        </div>
      )}

      {!isLoading && song && (
        // We include the header here because we need to
        // know if the song is playing or not
        <>
          <SpotifyCardHeader playing={song.isPlaying} />

          <div className="relative w-full h-full flex items-center justify-center py-16 md:py-0">
            {/* Album cover */}
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
                  className="w-36 h-36 rounded-sm"
                />
              </a>
            </div>
            {/* Rotating text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className={clsxm(song.isPlaying && "animate-spin-very-slow")}
              >
                <ReactCurvedText
                  width={RADIUS_PX}
                  height={RADIUS_PX}
                  cx={RADIUS_PX / 2}
                  cy={RADIUS_PX / 2}
                  rx={RADIUS_PX / 2}
                  ry={RADIUS_PX / 2}
                  text={`${song.name} • ${song.artists.join(", ")} 🎵`}
                  textProps={{
                    className: "text-sm uppercase font-mono",
                    fill: "white",
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
