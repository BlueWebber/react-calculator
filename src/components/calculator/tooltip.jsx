import ReactTooltip from "react-tooltip";
import { useTheme } from "styled-components";
import { useIsMobile } from "../../context/isMobile";

const Tooltip = ({ children, id }) => {
  const theme = useTheme();
  const isMobile = useIsMobile();

  return (
    <ReactTooltip
      id={id || children}
      place="bottom"
      effect="solid"
      arrowColor="transparent"
      backgroundColor={theme.colors.tooltip}
      textColor={theme.colors.text.tooltip}
      offset={{ top: 7 }}
      globalEventOff={isMobile ? "click" : undefined}
    >
      {children}
    </ReactTooltip>
  );
};

export default Tooltip;
