import clsx from "clsx";
import regionToCountryCode from "../../lib/countryCodes.js";

export default function Flag({ country, className, ...props }) {
  var countryCode = regionToCountryCode[country];
  if (!countryCode) return null;
  return (
    <span className={clsx("inline-block", className)}>
      <img
        src={`https://flagcdn.com/96x72/${countryCode}.png`}
        crossOrigin="anonymous"
        alt="country flag"
        className="h-4 w-auto"
        {...props}
      />
    </span>
  );
}
