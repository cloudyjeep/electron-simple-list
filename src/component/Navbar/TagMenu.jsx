import { Checkmark, Duplicate, List, Restaurant } from "grommet-icons";
import { Box, Button } from "grommet";
import { useStore } from "../../store";
import { diantarkan, dibuat, diterima } from "../../store/orderList";
import { FilterListByStatus } from "./../../actions/ListFilter";
import { memo } from "preact/compat";

const getListMenu = (order, count) => {
  let l = [{ status: "", count }];
  for (const i in order) l.push({ status: i, count: order[i] });
  return l;
};

const Menu = memo(({ active, mobile, status, count }) => {
  const Icon =
    status == diterima
      ? Duplicate
      : status == dibuat
      ? Restaurant
      : status == diantarkan
      ? Checkmark
      : List;
  return (
    <Button
      icon={<Icon />}
      label={status || "semua"}
      active={status == active}
      onClick={() => FilterListByStatus(status)}
      badge={{ value: count, max: 99 }}
      dir="rtl"
      color={mobile ? "" : "background-back"}
      size="medium"
    />
  );
});

const TagMenu = ({ mobile }) => {
  const { orderList, orderListCount, orderListFilter: active } = useStore();
  return (
    <Box
      direction="row"
      justify="center"
      round={"large"}
      gap={mobile ? "xsmall" : "medium"}
      pad={mobile ? "medium" : { vertical: "small", horizontal: "large" }}
      background={mobile ? "validation-warning" : "background-contrast"}
      style={mobile && { flexWrap: "wrap", rowGap: "6px" }}
    >
      {getListMenu(orderListCount, orderList.length).map((menu, i) => (
        <Menu key={i} {...{ active, mobile }} {...menu} />
      ))}
    </Box>
  );
};

export default TagMenu;
