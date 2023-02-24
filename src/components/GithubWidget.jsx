import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { useMediaQuery } from "react-responsive";
import ReactTooltip from "react-tooltip";

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
  const isVeryLargeScreen = useMediaQuery({ query: "(min-width: 1500px)" });
  const [tooltipsEnabled, setTooltipsEnabled] = useState(true);

  const nOfMonthsToDisplay = isTabletOrMobile ? 3 : isVeryLargeScreen ? 12 : 8;

  return (
    // There is a slight bug that makes it so that when you
    // move the mouse away from the block, the tooltip will not disappear.
    // To prevent this, we disable tooltips altogether if we detect that
    // the cursor is outside of the github calendar
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
        transformData={selectLastNMonths(nOfMonthsToDisplay)}
        weekStart={1}
        labels={{
          totalCount: `{{count}} contributions in the last ${nOfMonthsToDisplay} months`,
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
  );
}
