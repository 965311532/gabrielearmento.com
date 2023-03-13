import { SickLink } from "./SickLink";

export default function FooterWidget() {
  return (
    <span className="text-zinc-300">
      If you want to get in touch, you can find me on{" "}
      <SickLink
        href="https://www.linkedin.com/in/gabrielearmento/"
        name="LinkedIn"
      />{" "}
      or you can also send me an email at{" "}
      <SickLink
        href="mailto:gabriele.armento@gmail.com"
        name="gabriele.armento@gmail.com"
      />
    </span>
  );
}