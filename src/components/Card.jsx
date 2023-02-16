export default function Card({ spanClass, bgClass, sizeClass, children }) {
  // This is needed because Tailwind can't parse dynamic classes
  return (
    <div
      className={`${spanClass} p-4 rounded-[20px] flex flex-col justify-center items-center ${bgClass} ${sizeClass}`}
    >
      {children}
    </div>
  );
}
