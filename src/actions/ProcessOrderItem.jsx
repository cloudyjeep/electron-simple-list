import { useDispatch, useStore } from "../store";
import { FilterListByStatus } from "./ListFilter";

const ProcessOrderItem = (item, status) => {
  const { id, status: lastStatus } = item;
  const dispatch = useDispatch();
  dispatch({ loading: true });

  console.log("ProcessOrderItem:", [item, lastStatus, "->", status]);

  setTimeout(() => {
    let { orderList, orderListCount, orderListFilter } = useStore();
    orderListCount[status]++;
    orderListCount[lastStatus]--;

    orderList = [{ ...item, status }, ...orderList.filter((o) => id != o.id)];

    dispatch({
      loading: false,
      orderList,
      orderListCount,
    });
    FilterListByStatus(orderListFilter);
  }, 200);
};

export default ProcessOrderItem;
