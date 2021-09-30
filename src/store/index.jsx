import { createRef, useReducer } from "preact/compat";
import { orderList, orderListCount } from "./orderList";

// var reference for caching store data
const ref = createRef([]);

// default state
const initialState = {
  hasInit: false,
  authorized: false,
  needRegister: false,
  loading: true,
  user: null,
  /** @type { orderList } */
  orderList: orderList,
  orderListCount: orderListCount,
  /** @type { orderListFilter } */
  orderListFilter: '',

  pageSize: 6,
  pageLength: orderList.length,
  pagePos: 1,
  page: { startIndex: 0, endIndex: 6 }

};

// store reducer
function reducer(state = initialState, action) {
  console.log('action:', action)
  if (action) return { ...state, ...action };
  else return { ...initialState };
}

/** @return {[initialState, dispatch]} create store via useReducer */
export const useCreateStore = () => {
  ref.current = useReducer(reducer, initialState);
  console.log("store:", ref.current[0]);
  return ref.current;
};

// get store data
/** @return {initialState} */
export const useStore = () => ref.current[0];

/** @return {[initialState, dispatch]} */
export const useStoreHook = () => ref.current;

// dispatch state
export const useDispatch = () => dispatch;
/** @param {initialState} action */
const dispatch = (action) => ref.current[1](action);

// store selector
export const useSelector = (fn) =>
  typeof fn === "function" ? fn(useStore()) : useStore();
