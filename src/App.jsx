import { SiSuperuser } from "react-icons/si";
import Card from "./components/Card";
import GithubWidget from "./components/GithubWidget";
import MapsWidget from "./components/MapsWidget";
import SpotifyWidget from "./components/SpotifyWidget";
import StackWidget from "./components/StackWidget";

function App() {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-6 gap-5 p-4 md:p-10">
      <Card sizeClass="h-20" spanClass="col-span-6" bgClass="bg-black">
        <h1 className="text-2xl text-white">
          Hi there! Welcome to my portfolio
        </h1>
      </Card>
      <Card
        sizeClass="h-full"
        spanClass="md:col-span-5 col-span-6"
        bgClass="bg-black p-8"
      >
        <h1 className="text-2xl text-white font-display">
          22 years old full stack software developer and aspiring entrepreneur
        </h1>
      </Card>
      <div className="col-span-6 md:col-span-1 w-full grid grid-cols-2 md:grid-cols-1 gap-3">
        <Card sizeClass="w-full" bgClass="bg-black">
          <div className="p-1">
            <img src="/public/linkedin-logo.svg" alt="linkedin logo" />
          </div>
        </Card>
        <Card sizeClass="w-full" bgClass="bg-black">
          <div className="p-1">
            <img src="/public/mail-icon.png" alt="github logo" />
          </div>
        </Card>
      </div>
      <StackWidget />
      <SpotifyWidget />
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
      <GithubWidget />
      <Card sizeClass="h-72" spanClass="col-span-6" bgClass="bg-black">
        <h1 className="text-2xl text-white">contact form</h1>
      </Card>
    </div>
  );
}

export default App;
