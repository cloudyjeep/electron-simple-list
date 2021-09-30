import { Box, Text } from "grommet";
import { memo } from "preact/compat";
import styled from "styled-components";

const TextValue_ = styled(Text)`
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 17px;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.clamp || 1};
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* white-space: normal !important; */
`;
const TextValue = memo((p) => <TextValue_ {...p} title={p.children} />);

const TextTitle = styled(Text)`
  flex: 0;
  font-weight: 500;
  line-height: 33px;
  margin-right: 16px;
`;

const OrderDetail = ({ item }) => (
  <Box direction="row" pad={{ top: "medium" }} margin={{ top: "-6px" }}>
    <TextTitle color="grey">{"Room Jumlah Modifier Notes"}</TextTitle>
    <Box flex={{ grow: 1, shrink: 1 }} pad={{ top: "8px" }}>
      <TextValue>{item.room || "-"}</TextValue>
      <TextValue>{item.value || "-"}</TextValue>
      <TextValue>{item.modifier.join(", ") || "-"}</TextValue>
      <TextValue clamp={2}>{item.notes || "-"}</TextValue>
    </Box>
  </Box>
);

export default OrderDetail;
