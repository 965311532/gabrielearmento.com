import {
  SiAmazonaws,
  SiDocker,
  SiFlask,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPandas,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiUbuntu,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

const tools = [
  {
    icon: SiAmazonaws,
    name: "Amazon Web Services",
    url: "https://aws.amazon.com/",
  },
  { icon: SiDocker, name: "Docker", url: "https://www.docker.com/" },
  { icon: SiGit, name: "Git", url: "https://git-scm.com/" },
  { icon: SiGithub, name: "Github", url: "https://github.com" },
  {
    icon: SiJavascript,
    name: "Javascript",
    url: "https://www.javascript.com/",
  },
  { icon: SiMongodb, name: "MongoDB", url: "https://www.mongodb.com/" },
  { icon: SiNodedotjs, name: "Node.js", url: "https://nodejs.org/en/" },
  { icon: SiPython, name: "Python", url: "https://www.python.org/" },
  { icon: SiReact, name: "React", url: "https://reactjs.org/" },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  {
    icon: SiVisualstudiocode,
    name: "Visual Studio Code",
    url: "https://code.visualstudio.com/",
  },
  {
    icon: SiPandas,
    name: "Pandas",
    url: "https://pandas.pydata.org/",
  },
  {
    icon: SiVercel,
    name: "Vercel",
    url: "https://vercel.com/",
  },
  {
    icon: SiFlask,
    name: "Flask",
    url: "https://flask.palletsprojects.com/en/2.0.x/",
  },
  {
    icon: SiMysql,
    name: "MySQL",
    url: "https://www.mysql.com/",
  },
  {
    icon: SiUbuntu,
    name: "Ubuntu",
    url: "https://ubuntu.com/",
  },
];

export default function StackWidget() {
  return (
    <div className="text-white grid grid-cols-4 gap-1">
      {/* Show the icons with the right color and set a tooltip on each element */}
      {tools.map((tool, index) => {
        const Icon = tool.icon;
        return (
          <a
            key={index}
            className="flex flex-col items-center justify-center m-2"
            href={tool.url}
            target="_blank"
          >
            <Icon className="text-4xl" title={tool.name} />
          </a>
        );
      })}
    </div>
  );
}
