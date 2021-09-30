import { Box, Grid } from "grommet";
import OrderName from "./OrderName";
import OrderDetail from "./OrderDetail";
import OrderLabel from "./OrderLabel";
import styled from "styled-components";
import { memo } from "preact/compat";
import { FilterNewOrderList } from "../../actions/ListFilter";
import { useStore } from "../../store";

const BoxItem = styled(Box)`
  background-image: linear-gradient(135deg, rgb(255 255 255) 60%, #fafafa);
`;

const OrderItem = memo(
  ({ item }) => {
    return (
      <BoxItem elevation={"small"} round={"small"} direction="row">
        <OrderName item={item} />
        <OrderDetail item={item} />
        <Box />
        <OrderLabel item={item} />
      </BoxItem>
    );
  },
  (prev, next) => {
    return prev.item.status == next.item.status;
  }
);

const ListOfOders = () => {
  const { page, orderListFilter } = useStore();
  const { startIndex, endIndex } = page;
  return (
    <Grid gap="medium" rows="small" columns={{ count: "fit", size: "medium" }}>
      {FilterNewOrderList(orderListFilter)
        .slice(startIndex, endIndex)
        .map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
    </Grid>
  );
};

export default ListOfOders;
