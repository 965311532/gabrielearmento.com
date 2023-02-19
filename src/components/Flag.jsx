import clsx from "clsx";

export default function Flag({ country, className, ...props }) {
  return (
    <img
      src={`https://countryflagsapi.com/svg/${country}`}
      crossOrigin="anonymous"
      alt="country flag"
      className={clsx("inline-block h-4 w-auto", className)}
      {...props}
    />
  );
}
