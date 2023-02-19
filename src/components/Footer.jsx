import { RiMailUnreadFill } from "react-icons/ri";
import { SiGithub, SiLinkedin } from "react-icons/si";

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="flex flex-row items-center justify-center hover:text-white/90"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <span className="text-zinc-400 md:text-sm text-2xl flex flex-row gap-4 items-center justify-center">
      <FooterLink href="https://github.com/965311532">
        <SiGithub className="md:mr-1" />
        <span className="hidden md:inline">965311532</span>
      </FooterLink>
      <span>—</span>
      <FooterLink href="https://www.linkedin.com/in/gabrielearmento/">
        <SiLinkedin className="md:mr-1" />
        <span className="hidden md:inline">Gabriele Armento</span>
      </FooterLink>
      <span>—</span>
      <FooterLink href="mailto:gabriele.armento@gmail.com">
        <RiMailUnreadFill className="md:mr-1" />
        <span className="hidden md:inline">gabriele.armento@gmail.com</span>
      </FooterLink>
    </span>
  );
}
