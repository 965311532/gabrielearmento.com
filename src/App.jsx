import { FaTools } from "react-icons/fa";
import { MdContactPhone, MdWork } from "react-icons/md";
import { SiGithub, SiSuperuser } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import { clsxm } from "../lib/utils";
import { Card, CardHeader } from "./components/Card";
import FooterWidget from "./components/FooterWidget";
import GithubWidget from "./components/GithubWidget";
import MapsWidget from "./components/MapsWidget";
import SpotifyWidget from "./components/SpotifyWidget";
import StackWidget from "./components/StackWidget";
import WorkWidget from "./components/WorkWidget";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 375px)" });

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-6 gap-5 p-5 pt-8 md:p-10 2xl:max-w-[1200px] 2xl:gap-6 scroll-smooth">
      {/* Greetings card */}
      <Card className="col-span-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-start w-full">
          <div className="flex flex-row items-baseline justify-start w-full md:w-auto">
            <img
              src="/pfp.png"
              alt="Profile Picture"
              className="md:w-32 md:h-32 md:mr-4 w-24 h-24 absolute md:bottom-0 md:ml-8 md:mt-0 top-0 md:left-0 md:right-auto right-0 md:top-auto md:rotate-0 rotate-180 mr-6 sm:mr-7 -mt-2
              z-0 md:-mb-2 transform md:hover:-translate-y-1 transition-all duration-300 ease-in-out hover:translate-y-1"
            />
          </div>
          <div className="flex flex-col items-start justify-start md:ml-32">
            <h1 className="font-display font-black text-4xl text-white/90 md:mt-2">
              Hi there!
              {isTabletOrMobile && !isSmallMobile && (
                <span className="text-3xl"> 😃</span>
              )}
            </h1>
            <span className="text-zinc-200 z-10 mt-2 md:mt-0">
              I'm Gabriele, a 22 y/o software developer based in Italy.
            </span>
          </div>
        </div>
      </Card>

      {/* Projects card */}
      <Card className="col-span-6 md:col-span-6 max-h-[500px] md:max-h-[400px] overflow-y-auto">
        <CardHeader title="My projects" icon={MdWork} />
        <WorkWidget />
      </Card>

      {/* About me card */}
      <Card className="col-span-6 md:col-span-4">
        <CardHeader title="About me" icon={SiSuperuser} />
        <span className="text-zinc-200">
          Ciao, I'm Gabriele, a self-taught software developer based in Italy. I
          have a passion for automation, finance, and entrepreneurship. I highly
          value friendship, logic, and curiosity, and I'm always seeking to
          learn new things. Whether it's exploring new technologies or working
          on long-term projects, I'm always up for a challenge. Let's connect
          and see how we can work together!
        </span>
      </Card>

      {/* Map widget */}
      <Card
        className={clsxm(
          "col-span-6 md:col-span-2 md:min-h-[0px] min-h-[450px]",
          "bg-transparent p-0 md:p-0",
          "shadow-[inset_0_0_50px_-10px_rgba(0,0,0,0.5)]"
        )}
      >
        <MapsWidget />
      </Card>

      {/* Stack widget */}
      <Card className="col-span-6 md:col-span-3">
        <CardHeader title="My favourite tools" icon={FaTools} />
        <StackWidget />
      </Card>

      {/* Spotify widget */}
      <Card className="col-span-6 md:col-span-3 min-h-[300px]">
        <SpotifyWidget />
      </Card>

      {/* Github widget */}
      <Card className="col-span-6">
        <CardHeader title="Github contributions" icon={SiGithub} />
        <GithubWidget />
      </Card>

      {/* Footer */}
      <Card className="col-span-6">
        <CardHeader title="Contact me" icon={MdContactPhone} />
        <FooterWidget />
      </Card>
    </div>
  );
}

export default App;
