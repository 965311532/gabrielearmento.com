import { MdWork } from "react-icons/md";
import { RiExternalLinkFill } from "react-icons/ri";
import genoleggiappLogo from "../assets/images/genoleggiapp-logo.png";
import personalWebsiteLogo from "../assets/images/personal-website-logo.svg";
import tapTheTroutLogo from "../assets/images/tap-the-trout-logo.svg";
import Card from "./Card";

const projects = [
  {
    icon: genoleggiappLogo,
    name: "Genoleggiapp",
    description:
      "A portal for Genoleggia S.p.A. to manage their customer and long-term-rental offers.",
    url: "https://app.genoleggia.com/",
  },
  {
    icon: personalWebsiteLogo,
    name: "My personal website",
    description:
      "A simple react website to showcase my projects and skills. It's also a playground for me to try new things.",
    github: "https://github.com/965311532/personal-website",
  },
  {
    icon: tapTheTroutLogo,
    name: "Tap the trout",
    description:
      "A fun little clicker game that I made with a friend. It's a tribute to the classic 'Cookie Clicker' game.",
    url: "https://tapthetrout.com/",
    github: "https://github.com/965311532/tap-the-trout",
  },
];

function ProjectLink({ url, name }) {
  return (
    <a
      className="inline-flex underline flex-row items-center text-zinc-100 hover:text-blue-400 transition-all duration-300 ease-out hover:underline"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {name} <RiExternalLinkFill className="inline-block ml-1" />
    </a>
  );
}

function Project({ icon, name, description, url, github }) {
  return (
    <div className="flex flex-row flex-shrink items-start md:items-center justify-start text-left mb-4">
      <img src={icon} className="w-7 h-7 pt-1 md:pt-0 md:w-10 md:h-10 mr-4" />
      <div className="flex flex-col">
        <span className="text-xl font-bold font-display text-white/90">
          {name}
        </span>
        <span className="text-white/80">
          {description} {github && <ProjectLink url={github} name="GitHub" />}
          {url && github && " • "}
          {url && <ProjectLink url={url} name="Check it out" />}
        </span>
      </div>
    </div>
  );
}

export default function WorkWidget() {
  return (
    <Card
      spanClass="col-span-6 md:col-span-6 max-h-[500px] md:max-h-[400px] overflow-y-auto"
      bgClass="bg-black p-10"
    >
      <div className="w-full">
        <div className="text-lg uppercase font-bold font-display text-white/90 inline-flex flex-row flex-shrink items-center justify-start text-left mb-4">
          <MdWork className="mr-2" />
          <span>My work</span>
        </div>
      </div>
      <div className="flex flex-col overflow-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-900/50 pr-8 -mr-10 scroll-smooth">
        {projects.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </div>
    </Card>
  );
}
