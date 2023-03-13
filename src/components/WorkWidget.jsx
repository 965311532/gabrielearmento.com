import genoleggiappDemoLogo from "../assets/images/genoleggiapp-demo-logo.svg";
import genoleggiappLogo from "../assets/images/genoleggiapp-logo.png";
import personalWebsiteLogo from "../assets/images/personal-website-logo.svg";
import pieChartImg from "../assets/images/pie-chart.png";
import tapTheTroutLogo from "../assets/images/tap-the-trout-logo.svg";
import { SickLink } from "./SickLink";

const projects = [
  {
    icon: genoleggiappLogo,
    name: "Genoleggiapp 🔒",
    description:
      "A full-fledged portal for Genoleggia S.p.A. to manage their internal processes, B2B and B2C offers and customer relations.",
    url: "https://app.genoleggia.com/",
  },
  {
    icon: personalWebsiteLogo,
    name: "My personal website",
    description:
      "A simple React website to showcase my projects and skills. It's also a playground for me to try new things.",
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
  {
    icon: genoleggiappDemoLogo,
    name: "Genoleggiapp showcase",
    description:
      "The very first version of the Genoleggiapp portal. It was made in a few days to showcase the idea to the client.",
    url: "https://www.genoleggia.it/demo/index.html",
  },
  {
    icon: pieChartImg,
    name: "Trading signals research",
    description:
      "A research project I conducted to determine the actual performance of a certain paid trading signals group.",
    url: "https://nbviewer.org/github/965311532/backtesting-results/blob/master/backtesting-results.ipynb?flush-cache=True",
    github: "https://github.com/965311532/backtesting-results",
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
    <div className="flex flex-col">
      {projects.map((project, index) => {
        return <Project key={index} {...project} />;
      })}
    </div>
  );
}
