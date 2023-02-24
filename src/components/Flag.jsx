import regionToCountryCode from "../../lib/countryCodes.js";
import { clsxm } from "../../lib/utils.js";

export default function Flag({ country, className, ...props }) {
  var countryCode = regionToCountryCode[country];
  if (!countryCode) return null;
  return (
    <span className={clsxm("inline-block", className)}>
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
