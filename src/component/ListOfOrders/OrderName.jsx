import { Avatar, Box, Text } from "grommet";
import styled from "styled-components";
import { getAlias } from "../../utillities";

const TextLess = styled(Text)`
  font-size: 22px;
  line-height: 25px;
  word-break: break-word;
  text-align: center;
  font-weight: 700;
  color: #635940;
`;

const TextMore = styled(TextLess)`
  line-height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-weight: 600;
`;

const OrderName = ({ item }) => {
  return (
    <Box
      pad={{ horizontal: "medium", top: "medium" }}
      style={{ flex: 0, minWidth: "min-content" }}
    >
      <Avatar size="xlarge" background="#d2c195" round="small">
        {getAlias(item.name)}
      </Avatar>
      <Box flex={{ grow: 1, shrink: 1 }} justify="center">
        {isMoreTwoWord(item.name) ? (
          <TextMore color="text" title={item.name}>
            {item.name}
          </TextMore>
        ) : (
          <TextLess color="text">{item.name}</TextLess>
        )}
      </Box>
    </Box>
  );
};

const isMoreTwoWord = (name) => String(name).trim().split(" ").length > 2;

export default OrderName;
