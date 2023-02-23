import { SiSuperuser } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import Card from "./components/Card";
import Footer from "./components/Footer";
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
      <Card
        sizeClass="h-full"
        spanClass="col-span-6 relative overflow-hidden"
        bgClass="bg-black"
      >
        <div className="flex flex-col md:flex-row items-center justify-start w-full md:py-6 md:px-10 p-4">
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
      <WorkWidget />
      <Card spanClass="col-span-6 md:col-span-4" bgClass="bg-black p-8">
        <div className="w-full">
          <div className="text-lg uppercase font-bold font-display text-white/90 inline-flex flex-row flex-shrink items-center justify-start text-left mb-4">
            <SiSuperuser className="mr-2" />
            <span>About me</span>
          </div>
        </div>
        <span className="text-zinc-200">
          Ciao, I'm Gabriele, a self-taught software developer based in Italy. I
          have a passion for automation, finance, and entrepreneurship. I highly
          value friendship, logic, and curiosity, and I'm always seeking to
          learn new things. Whether it's exploring new technologies or working
          on long-term projects, I'm always up for a challenge. Let's connect
          and see how we can work together!
        </span>
      </Card>
      <MapsWidget />
      <StackWidget />
      <SpotifyWidget />
      <GithubWidget />
      <div className="col-span-6 p-6">
        <Footer />
      </div>
    </div>
  );
}

export default App;
