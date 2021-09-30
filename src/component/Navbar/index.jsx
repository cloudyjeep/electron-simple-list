import { Box, Heading, ResponsiveContext } from "grommet";
import TagMenu from "./TagMenu";
import AvatarUser from "./AvatarUser";
import { memo, useContext, useEffect, useState } from "preact/compat";

const space = {
  flex: 1,
  maxWidth: "15vw",
};
const navStyle = {
  backdropFilter: "blur(2px)",
  background: "linear-gradient(180deg, #ffd59b, transparent)",
};

export const Navbar = () => {
  const size = useContext(ResponsiveContext);
  const [mobile, setMobile] = useState([true, 0]);
  console.log({ size, mobile });

  useEffect(() => {
    setMobile(size == "xsmall" || size == "small");
  }, [size]);

  return (
    <Box style={{ position: "sticky", width: "100vw", top: 0 }}>
      <Box
        pad={{ horizontal: "medium", top: "medium" }}
        gap={mobile ? "large" : ""}
        style={navStyle}
      >
        <Box
          direction="row"
          align="center"
          pad={{ horizontal: "medium", vertical: "small" }}
          justify="between"
          background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
          elevation="large"
          style={{ zIndex: "10" }}
          round={{ size: "small" }}
        >
          <Heading level={4} style={space} margin="none" color="white">
            <strong>Order List</strong>
          </Heading>
          {!mobile && <TagMenu />}
          <Box style={{ ...space, alignItems: "flex-end" }}>
            <AvatarUser mobile={mobile} />
          </Box>
        </Box>
        {mobile && <TagMenu mobile={{ mobile }} />}
      </Box>

      {/* Fade backdrop blur bottom */}
      {[1.5, 1, 0.5, 0.15].map((n, i) => (
        <Box
          key={i}
          style={{ backdropFilter: `blur(${n}px)`, height: "3px" }}
        />
      ))}
    </Box>
  );
};

export default Navbar;
