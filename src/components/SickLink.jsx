import { RiExternalLinkFill } from "react-icons/ri";
import { clsxm } from "../../lib/utils";

export function SickLink({ href, name, className }) {
  return (
    <a
      className={clsxm(
        "inline-flex underline flex-row items-center text-zinc-100 hover:text-blue-400 transition-all duration-300 ease-out hover:underline",
        className
      )}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {name} <RiExternalLinkFill className="inline-block ml-1" />
    </a>
  );
}
