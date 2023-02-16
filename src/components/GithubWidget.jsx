import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import ReactTooltip from "react-tooltip";
import Card from "./Card";

const CALENDAR_THEME = {
  level4: "#16a34a",
  level3: "#15803d",
  level2: "#166534",
  level1: "#14532d",
  level0: "#18181b",
};

const selectLastNMonths = (n) => (data) => {
  // Transform data to only show last n months (approx.)
  const lastNMonths = data.slice(-n * 30);
  return lastNMonths;
};

export default function GitHubWidget() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [tooltipsEnabled, setTooltipsEnabled] = useState(true);

  return (
    <Card
      sizeClass="md:py-8 p-6 md:px-10 pt-6"
      spanClass="col-span-6"
      bgClass="bg-black"
    >
      <div className="w-full">
        <a
          href="https://github.com/965311532"
          target="_blank"
          className="text-lg uppercase font-bold text-white/90 inline-flex flex-row flex-shrink items-center justify-start text-left mb-4"
        >
          <SiGithub className="mr-2" />
          <span className="hover:underline">
            Github {!isTabletOrMobile && "contributions"}
          </span>
          <FiExternalLink className="ml-2 hover:scale-105 transform transition duration-100" />
        </a>
      </div>

      {/* There is a slight bug that makes it so that when you
      move the mouse away from the block, the tooltip will not disappear.
      To prevent this, we disable tooltips altogether if we detect that
      the cursor is outside of the github calendar */}
      <div
        onMouseEnter={() => {
          setTooltipsEnabled(true);
        }}
        onMouseLeave={() => {
          setTooltipsEnabled(false);
        }}
      >
        <GitHubCalendar
          username="965311532"
          blockSize={16}
          blockRadius={3}
          hideColorLegend={isTabletOrMobile ? true : false}
          style={{
            color: "#ffffff",
          }}
          theme={CALENDAR_THEME}
          transformData={selectLastNMonths(isTabletOrMobile ? 3 : 8)}
          weekStart={1}
          labels={{
            totalCount: `{{count}} contributions in the last ${
              isTabletOrMobile ? 3 : 8
            } months`,
          }}
        >
          {
            // Tooltips should only be enabled on desktop.
            !isTabletOrMobile && tooltipsEnabled && (
              <ReactTooltip html effect="solid" />
            )
          }
        </GitHubCalendar>
      </div>
    </Card>
  );
}
