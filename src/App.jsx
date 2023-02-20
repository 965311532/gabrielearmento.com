import { SiSuperuser } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import Card from "./components/Card";
import Footer from "./components/Footer";
import GithubWidget from "./components/GithubWidget";
import MapsWidget from "./components/MapsWidget";
import SpotifyWidget from "./components/SpotifyWidget";
import StackWidget from "./components/StackWidget";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-6 gap-5 p-4 md:p-10 2xl:max-w-[1200px] 2xl:gap-6">
      <Card sizeClass="h-full" spanClass="col-span-6" bgClass="bg-black">
        <div className="flex flex-col md:flex-row items-center justify-start w-full md:py-6 md:px-10 p-4">
          <div className="flex flex-row items-baseline justify-start w-full md:w-auto">
            <img
              src="/pfp.png"
              alt="Profile Picture"
              className="md:w-20 md:h-20 mr-4 w-[40px] h-[40px]"
            />
            {isTabletOrMobile && (
              <h1 className="text-[40px] text-white/90 font-bold">Hi there!</h1>
            )}
          </div>
          <div className="flex flex-col items-start justify-start">
            {!isTabletOrMobile && (
              <h1 className="text-4xl text-white/90 font-bold">Hi there!</h1>
            )}
            <span className="text-white/70">
              I'm Gabriele, a 22 years old software developer based in Italy.
            </span>
          </div>
        </div>
      </Card>
      <Card spanClass="col-span-6 md:col-span-4" bgClass="bg-black p-8">
        <div className="w-full">
          <div className="text-lg uppercase font-bold font-display text-white/90 inline-flex flex-row flex-shrink items-center justify-start text-left mb-4">
            <SiSuperuser className="mr-2" />
            <span>About me</span>
          </div>
        </div>
        <span className="text-white">
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
