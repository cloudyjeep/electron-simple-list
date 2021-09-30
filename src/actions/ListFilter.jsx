import { useDispatch, useStore } from "../store";

export const FilterNewOrderList = (filter) => {
  const { orderList } = useStore();
  return filter ? orderList.filter((item) => filter == item.status) : orderList;
};

export const FilterListByStatus = (status) => {
  const { pageSize } = useStore();
  const dispatch = useDispatch();
  dispatch({
    orderListFilter: status,
    pageLength: FilterNewOrderList(status).length,
    page: { startIndex: 0, endIndex: 0 + pageSize },
    pagePos: 1,
  });
};
