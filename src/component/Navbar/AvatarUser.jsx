import { Logout } from "grommet-icons";
import { Box, Avatar, Menu, Text } from "grommet";
import { useStore } from "../../store";
import { name } from "../../store/user";
import LogoutUser from "../../actions/LogoutUser";
import { getAlias } from "../../utillities";
import { memo } from "preact/compat";

export const AvatarUser = memo(() => {
  const { user } = useStore();
  return (
    <Menu
      plain
      dropProps={{ align: { right: "right", top: "bottom" } }}
      items={[
        {
          label: <Text>{user[name]}</Text>,
        },
        {
          onClick: LogoutUser,
          label: <Box pad="xsmall">Log out</Box>,
          icon: (
            <Box pad="xsmall">
              <Logout size="medium" />
            </Box>
          ),
        },
      ]}
    >
      <Box direction="row">
        {/* <Text>{user[name]}</Text> */}
        <Avatar background="status-warning" size="large" /* round="small" */>
          <Text size="xxlarge">{getAlias(user[name])}</Text>
        </Avatar>
      </Box>
    </Menu>
  );
});

export default AvatarUser;
