import genoleggiappLogo from "../assets/images/genoleggiapp-logo.png";
import personalWebsiteLogo from "../assets/images/personal-website-logo.svg";
import tapTheTroutLogo from "../assets/images/tap-the-trout-logo.svg";
import { SickLink } from "./SickLink";

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
    name: "Tap The Trout",
    description:
      "A fun little clicker game that I made with a friend. It's a tribute to the classic 'Cookie Clicker' game.",
    url: "https://tapthetrout.com/",
    github: "https://github.com/965311532/tap-the-trout",
  },
];

function Project({ icon, name, description, url, github }) {
  return (
    <div className="flex flex-row flex-shrink items-start md:items-center justify-start text-left mb-4">
      <img src={icon} className="w-7 h-7 pt-1 md:pt-0 md:w-10 md:h-10 mr-4" />
      <div className="flex flex-col">
        <span className="text-xl font-bold font-display text-white/90">
          {name}
        </span>
        <span className="text-white/80">
          {description} {github && <SickLink href={github} name="GitHub" />}
          {url && github && " • "}
          {url && <SickLink href={url} name="Check it out" />}
        </span>
      </div>
    </div>
  );
}

export default function WorkWidget() {
  return (
    <div className="flex flex-col overflow-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-900/50 pr-8 -mr-12 scroll-smooth">
      {projects.map((project, index) => {
        return <Project key={index} {...project} />;
      })}
    </div>
  );
}
