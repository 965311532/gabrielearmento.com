import { clsxm } from "../../lib/utils";

export function CardHeader({ title, icon: Icon }) {
  return (
    <div className="w-full mb-4">
      <div className="text-lg uppercase font-bold font-display text-white/90 inline-flex flex-row flex-shrink items-center justify-start text-left">
        <Icon className="mr-2" />
        <span>{title}</span>
      </div>
    </div>
  );
}

export function Card({ className, children }) {
  // This is needed because Tailwind can't parse dynamic classes
  return (
    <div
      className={clsxm(
        "bg-black shadow-[inset_0_0_500px_-10px_rgba(255,255,255,0.1)]",
        "p-10 md:p-12 rounded-xl md:rounded-xl",
        "ring-1 ring-zinc-800/70 ",
        "flex flex-col justify-between items-center",
        "overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
