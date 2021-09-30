import { useDispatch, useStoreHook } from "../store";
import { CHECK_SESSION_USER } from "../store/user";

const CheckSession = async () => {
  console.log("CheckSession");
  const user = await CHECK_SESSION_USER();
  const dispatch = useDispatch();
  dispatch({ user, authorized: !!user, loading: false, hasInit: true });
};

export default CheckSession;
