import ReactTooltip from "react-tooltip";
import { useTheme } from "styled-components";

const Tooltip = ({ tooltip }) => {
  const theme = useTheme();
  return (
    <ReactTooltip
      id={tooltip}
      place="bottom"
      effect="solid"
      arrowColor="transparent"
      backgroundColor={theme.colors.tooltip}
      offset={{ top: 7 }}
    >
      {tooltip}
    </ReactTooltip>
  );
};

export default Tooltip;
