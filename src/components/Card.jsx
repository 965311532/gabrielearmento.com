export default function Card({ spanClass, bgClass, sizeClass, children }) {
  // This is needed because Tailwind can't parse dynamic classes
  return (
    <div
      className={`${spanClass} shadow-[inset_0_0_500px_-10px_rgba(255,255,255,0.1)] p-4 ring-1 ring-zinc-800/70 rounded-xl md:rounded-[20px] flex flex-col justify-center items-center ${bgClass} ${sizeClass}`}
    >
      {children}
    </div>
  );
}
