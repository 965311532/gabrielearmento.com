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
    <span className="text-zinc-400 text-sm flex flex-row gap-4 items-center justify-center">
      <FooterLink href="https://github.com/965311532">
        <SiGithub className="mr-1" /> 965311532
      </FooterLink>
      <span>—</span>
      <FooterLink href="https://www.linkedin.com/in/gabrielearmento/">
        <SiLinkedin className="mr-1" />
        Gabriele Armento
      </FooterLink>
      <span>—</span>
      <FooterLink href="mailto:gabriele.armento@gmail.com">
        <RiMailUnreadFill className="mr-1" /> gabriele.armento@gmail.com
      </FooterLink>
    </span>
  );
}
