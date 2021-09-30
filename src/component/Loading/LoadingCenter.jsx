import { Box, Spinner, Text } from "grommet";
import { RadialSelected } from "grommet-icons";

/** @type {import("grommet").BoxExtendedProps} */
const boxStyle = {
  fill: true,
  align: "center",
  justify: "center",
  style: {
    position: "absolute",
    top: 0,
  },
};
const bdStyle = {
  backgroundColor: "rgb(255 255 255 / 15%)",
  backdropFilter: "blur(3px)",
  opacity: 0.8,
};

const LoadingCenter = ({ backdrop: bd }) => {
  return (
    <Box {...boxStyle}>
      <Box {...boxStyle} style={{ ...boxStyle.style, ...(bd && bdStyle) }} />
      <Spinner
        animation={{ type: "pulse", duration: 150, size: "large" }}
        justify="center"
      >
        <RadialSelected
          opacity={1}
          size='large'
          color={"background-contrast"}
          filter={"drop-shadow(0px 0px 16px)"}
        />
      </Spinner>
    </Box>
  );
};

export default LoadingCenter;
